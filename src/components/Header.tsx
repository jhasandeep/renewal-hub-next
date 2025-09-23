import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">
              DivorcePro
            </h1>
            <span className="text-muted-foreground">Legal Services</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#process" className="text-foreground hover:text-primary transition-smooth">
              Process
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>info@divorcepro.com</span>
              </div>
            </div>
            <Button variant="cta" size="sm">
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;