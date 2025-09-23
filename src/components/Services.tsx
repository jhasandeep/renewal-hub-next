import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Scale, 
  Home, 
  Baby, 
  DollarSign, 
  FileText, 
  Users,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Divorce Mediation",
      description: "Collaborative approach to resolve disputes amicably while protecting both parties' interests.",
      features: ["Cost-effective solution", "Faster resolution", "Reduced conflict"]
    },
    {
      icon: Home,
      title: "Property Division",
      description: "Expert guidance on equitable distribution of marital assets, real estate, and investments.",
      features: ["Asset valuation", "Property rights", "Financial planning"]
    },
    {
      icon: Baby,
      title: "Child Custody",
      description: "Protecting your children's best interests while securing your parental rights.",
      features: ["Custody arrangements", "Visitation rights", "Child support"]
    },
    {
      icon: DollarSign,
      title: "Spousal Support",
      description: "Fair determination of alimony and maintenance based on your unique circumstances.",
      features: ["Support calculation", "Modification requests", "Enforcement"]
    },
    {
      icon: FileText,
      title: "Legal Documentation",
      description: "Comprehensive preparation of all necessary legal documents and filings.",
      features: ["Court filings", "Settlement agreements", "Decree preparation"]
    },
    {
      icon: Users,
      title: "Collaborative Divorce",
      description: "Team approach involving lawyers, financial advisors, and counselors.",
      features: ["Interdisciplinary team", "Holistic support", "Family-centered"]
    }
  ];

  return (
    <section id="services" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive Divorce Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every divorce is unique. We provide personalized legal strategies 
            tailored to your specific situation and goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-medium transition-smooth group">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-accent p-3 rounded-lg group-hover:bg-accent-primary group-hover:text-white transition-smooth">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <ArrowRight className="h-4 w-4 text-accent-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="cta" size="lg" className="px-8">
            Schedule Your Consultation Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;