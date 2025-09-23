import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">DivorcePro Legal Services</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Professional, compassionate legal guidance through life's most challenging transitions. 
              We're committed to protecting your interests while preserving your dignity throughout 
              the divorce process.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent-primary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent-primary transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent-primary transition-smooth">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-primary-foreground/80 hover:text-accent-primary transition-smooth">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent-primary transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent-primary transition-smooth">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent-primary transition-smooth">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent-primary transition-smooth">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-primary mt-0.5" />
                <div className="text-primary-foreground/80">
                  <p>123 Legal District</p>
                  <p>Suite 456</p>
                  <p>Metropolitan City, MC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-primary" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-primary" />
                <span className="text-primary-foreground/80">info@divorcepro.com</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-primary-light/20 rounded-lg">
              <p className="text-sm text-primary-foreground/90 font-medium">
                24/7 Emergency Consultation Available
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 DivorcePro Legal Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-accent-primary text-sm transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent-primary text-sm transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent-primary text-sm transition-smooth">
                Legal Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;