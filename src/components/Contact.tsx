import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Calendar
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards resolution. We're here to listen, 
            understand, and provide the guidance you need.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover:shadow-medium transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent-primary" />
                  <span>Office Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Legal District<br />
                  Suite 456<br />
                  Metropolitan City, MC 12345
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-medium transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent-primary" />
                  <span>Phone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  <strong>(555) 123-4567</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  24/7 Emergency Line Available
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-medium transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent-primary" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  info@divorcepro.com
                </p>
                <p className="text-sm text-muted-foreground">
                  We respond within 2 hours
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-medium transition-smooth">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-accent-primary" />
                  <span>Office Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-large">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  All communications are confidential and protected by attorney-client privilege.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-smooth"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-smooth"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-smooth"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-smooth"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Case Type
                    </label>
                    <select className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-smooth">
                      <option>Divorce/Separation</option>
                      <option>Child Custody</option>
                      <option>Property Division</option>
                      <option>Spousal Support</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tell us about your situation *
                    </label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-smooth resize-none"
                      placeholder="Please provide details about your situation. All information shared is confidential."
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="cta" size="lg" className="flex-1">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                    <Button variant="professional" size="lg" className="flex-1">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule Consultation
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you acknowledge that any information provided 
                    will be kept strictly confidential.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;