import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "@/lib/firebase";
import { toast } from "@/hooks/use-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [pwMismatch, setPwMismatch] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) navigate('/');
    });
    return () => unsub();
  }, [navigate]);
  return (
    <Layout>
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Create account</CardTitle>
              <CardDescription>Join Kakbus — build and manage your tickets with ease.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form
                id="signup-form"
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  // Validate
                  if (password !== confirm) {
                    setPwMismatch(true);
                    toast({ title: "Passwords don't match", description: "Please make sure both passwords match." });
                    return;
                  }
                  setSubmitting(true);
                  try {
                    const cred = await createUserWithEmailAndPassword(auth, email, password);
                    // Update display name
                    if (name && cred.user) {
                      await updateProfile(cred.user, { displayName: name });
                    }
                    console.log("User created:", cred.user);
                    toast({ title: "Account created", description: "Welcome — redirecting to home." });
                    navigate("/");
                  } catch (err) {
                    console.error(err);
                    toast({ title: "Sign-up failed", description: String(err) });
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" />
                </div>
                <div className="relative">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder="••••••••" />
                  <button type="button" aria-label="Toggle password visibility" onClick={() => setShowPassword((s) => !s)} className="absolute right-2 top-8 text-muted-foreground">
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <div className="relative">
                  <Label htmlFor="confirm">Confirm password</Label>
                  <Input id="confirm" value={confirm} onChange={(e) => { setConfirm(e.target.value); setPwMismatch(password !== e.target.value); }} type={showConfirm ? "text" : "password"} placeholder="••••••••" />
                  <button type="button" aria-label="Toggle confirm visibility" onClick={() => setShowConfirm((s) => !s)} className="absolute right-2 top-8 text-muted-foreground">
                    {showConfirm ? "Hide" : "Show"}
                  </button>
                </div>

                <div id="signup-error" className="text-sm text-destructive" aria-live="polite">
                  {pwMismatch ? "Password doesn't match" : ""}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Already have an account?</span>
                  <Link to="/signin" className="text-sm text-primary hover:underline">
                    Sign in
                  </Link>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" disabled={submitting || pwMismatch || !email || !password}>Create account</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
