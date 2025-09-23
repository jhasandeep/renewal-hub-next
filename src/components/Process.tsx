import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, FileSearch, Gavel, HandHeart } from "lucide-react";

const Process = () => {
  const steps = [
    {
      step: 1,
      icon: MessageCircle,
      title: "Initial Consultation",
      description: "Free confidential meeting to understand your situation and explore your options.",
      duration: "1 hour",
      details: ["Case assessment", "Legal options review", "Cost estimation", "Timeline discussion"]
    },
    {
      step: 2,
      icon: FileSearch,
      title: "Case Preparation",
      description: "Thorough collection and analysis of all relevant documents and information.",
      duration: "2-4 weeks",
      details: ["Document gathering", "Asset valuation", "Financial analysis", "Strategy development"]
    },
    {
      step: 3,
      icon: Gavel,
      title: "Legal Proceedings",
      description: "Professional representation through negotiations, mediation, or court proceedings.",
      duration: "3-12 months",
      details: ["Filing paperwork", "Negotiations", "Court representation", "Settlement discussions"]
    },
    {
      step: 4,
      icon: HandHeart,
      title: "Resolution & Support",
      description: "Finalization of agreements and ongoing support for post-divorce matters.",
      duration: "Ongoing",
      details: ["Final decree", "Asset transfer", "Support modifications", "Future consultation"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A clear, structured approach that guides you through every step of your divorce 
            with transparency and confidence.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-accent-primary/30 transform translate-x-4 translate-y-1"></div>
              )}
              
              <Card className="text-center hover:shadow-medium transition-smooth group h-full">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="bg-accent-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  
                  <div className="bg-accent/50 rounded-lg p-3 mb-4">
                    <span className="text-sm font-medium text-accent-primary">
                      Duration: {step.duration}
                    </span>
                  </div>
                  
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-muted rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Begin?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every journey starts with a single step. Let us guide you through this process 
              with the care and expertise you deserve.
            </p>
            <Button variant="cta" size="lg">
              Start Your Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;