import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Navigate Your Divorce with
              <span className="block text-accent-primary">Confidence & Care</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Professional, compassionate legal guidance through life's most challenging transitions. 
              We protect your interests while preserving your dignity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Learn About Our Process
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-white/90">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent-primary" />
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-accent-primary" />
                <span>Confidential Process</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-accent-primary" />
                <span>Compassionate Support</span>
              </div>
            </div>
          </div>
          
          <div className="lg:ml-8">
            <Card className="bg-white/10 backdrop-blur border-white/20 p-8 shadow-large">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get Your Free Case Evaluation
              </h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-md bg-white/90 text-foreground placeholder-muted-foreground border-0 focus:ring-2 focus:ring-accent-primary"
                />
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md bg-white/90 text-foreground placeholder-muted-foreground border-0 focus:ring-2 focus:ring-accent-primary"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-md bg-white/90 text-foreground placeholder-muted-foreground border-0 focus:ring-2 focus:ring-accent-primary"
                />
                <textarea 
                  placeholder="Brief description of your situation..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-md bg-white/90 text-foreground placeholder-muted-foreground border-0 focus:ring-2 focus:ring-accent-primary resize-none"
                />
                <Button variant="professional" size="lg" className="w-full text-lg py-3">
                  Get Free Consultation
                </Button>
                <p className="text-white/70 text-sm text-center">
                  All consultations are completely confidential
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;