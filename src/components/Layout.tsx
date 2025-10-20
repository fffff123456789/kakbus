import { Link, useLocation } from "react-router-dom";
import kakbusLogo from "@/assets/kakbus-logo-new.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
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
              <Link
                to="/user"
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  isActive("/user")
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                User
              </Link>
            </div>
            
            {/* Spacer for balance */}
            <div className="w-32"></div>
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
