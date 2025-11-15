import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "@/hooks/use-toast";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
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
              <CardTitle>Sign in</CardTitle>
              <CardDescription>Welcome back — please enter your details to sign in.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form
                id="login-form"
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setErrorMsg(null);
                  setSubmitting(true);
                  try {
                    const cred = await signInWithEmailAndPassword(auth, email, password);
                    console.log("Signed in user:", cred.user);
                    toast({ title: "Signed in", description: "Redirecting to home" });
                    navigate("/");
                  } catch (err) {
                    console.error(err);
                    setErrorMsg(String(err));
                    toast({ title: "Sign-in failed", description: String(err) });
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
                </div>
                <div className="relative">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
                  <button type="button" aria-label="Toggle password visibility" onClick={() => setShowPassword((s) => !s)} className="absolute right-2 top-8 text-muted-foreground">
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                <div id="login-error" className="text-sm text-destructive" aria-live="polite">{errorMsg}</div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Don't have an account?</span>
                  <Link to="/signup" className="text-sm text-primary hover:underline">
                    Create account
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <Button id="login-submit" type="submit" disabled={submitting}>Sign in</Button>
                    <Button id="google-signin" type="button" variant="ghost" onClick={async () => {
                      setErrorMsg(null);
                      setSubmitting(true);
                      const provider = new GoogleAuthProvider();
                      try {
                        const result = await signInWithPopup(auth, provider);
                        console.log('Google sign-in result user:', result.user);
                        toast({ title: 'Signed in with Google' });
                        navigate('/');
                      } catch (err) {
                        console.error('Google sign-in failed', err);
                        setErrorMsg(String(err));
                        toast({ title: 'Google sign-in failed', description: String(err) });
                      } finally {
                        setSubmitting(false);
                      }
                    }}>Sign in with Google</Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
