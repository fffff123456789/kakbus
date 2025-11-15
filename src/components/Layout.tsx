import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import { auth } from "@/lib/firebase";
import kakbusLogo from "@/assets/kakbus-logo-new.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setCurrentUser(u ?? null));
    return () => unsub();
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src={kakbusLogo} 
                alt="Kakbus" 
                className="h-8 w-auto transition-transform hover:scale-105"
              />
            </Link>
            
            {/* Center Navigation */}
            <div className="flex items-center gap-2">
              <Link
                to="/"
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  isActive("/")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  isActive("/products")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                Products
              </Link>
              {/* Removed User link from center nav — replaced by Sign in / Sign up buttons on the right */}
            </div>
            
            {/* Right-side actions: Sign in / Sign up */}
            <div className="flex items-center gap-3">
              {/* Show sign-in/up only when not authenticated. When authenticated show account button */}
              {/** We lazily track the auth state here **/}
              {currentUser ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button size="sm">Signed in: {currentUser.displayName || (currentUser.email ? currentUser.email.split("@")[0] : "Account")}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link to="/user">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={async () => {
                        try {
                          await signOut(auth);
                          toast({ title: "Signed out", description: "You have been signed out." });
                          navigate('/');
                        } catch (err) {
                          console.error("Sign out failed", err);
                          toast({ title: "Sign out failed", description: String(err) });
                        }
                      }}
                    >
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to="/signin">Sign in</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link to="/signup">Sign up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2025 Kakbus. Built for tomorrow's builders.
            </p>
            <div className="flex gap-6">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Products
              </Link>
              <Link to="/user" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                User
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
