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

            <div className="flex items-center gap-6">
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

              {/* Social icons: Instagram, Discord, LinkedIn */}
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/kakbus"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" role="img">
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                  </svg>
                </a>

                <a
                  href="https://discord.gg/your-invite"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" role="img">
                    <path d="M20 4.5c-0.9-0.4-1.8-0.7-2.7-0.9-0.1 0-0.2 0-0.2 0-0.1 0-0.1 0-0.2 0C15.7 3.1 14.9 3 14 3c-1.8 0-3.4 0.4-4.8 1.1C8.8 3.4 7.4 3 6 3 5.2 3 4.4 3.1 3.6 3.3 3.6 3.3 3.5 3.3 3.4 3.3 2.7 3.5 2 3.9 1.4 4.5c-1 2.3-1.1 4.6-0.9 6.8 0 0.1 0 0.1 0 0.2 0.8 0.6 1.6 1.2 2.4 1.7 0.1 0.1 0.2 0.1 0.3 0.1 0.1 0 0.2 0 0.3-0.1 0 0 0 0 0 0C6.7 12.9 7 12.9 7.3 13c1.9 0.8 3.8 1.2 5.9 1.2 2 0 4-0.4 5.9-1.2 0.4-0.1 0.6-0.1 0.8-0.1 0.1 0 0.2 0 0.3 0.1 0.1 0 0.2 0 0.3 0.1 0.8-0.5 1.6-1.1 2.4-1.7 0 0 0 0 0 0 0-0.1 0-0.1 0-0.2 0.2-2.2 0.1-4.5-0.9-6.8C21 5.1 20.5 4.8 20 4.5zM8.5 10.7c-0.8 0-1.4-0.7-1.4-1.4 0-0.8 0.7-1.4 1.4-1.4 0.8 0 1.4 0.7 1.4 1.4 0 0.8-0.7 1.4-1.4 1.4zM15.5 10.7c-0.8 0-1.4-0.7-1.4-1.4 0-0.8 0.7-1.4 1.4-1.4 0.8 0 1.4 0.7 1.4 1.4 0 0.8-0.7 1.4-1.4 1.4z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/kakbus"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" role="img">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0zM7 8h4.8v2h.1c.7-1.2 2.4-2.5 4.9-2.5C21.9 7.5 24 10 24 14.3V22h-5v-7.1c0-1.7 0-3.9-2.5-3.9-2.5 0-2.9 2-2.9 3.8V22H7V8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
