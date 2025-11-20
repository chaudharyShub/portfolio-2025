import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "sc07807cs@gmail.com",
      href: "mailto:sc07807cs@gmail.com",
      description: "Drop me a message"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/shubham-chaudhary-4398bba8/",
      description: "Let's network"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "View my code",
      href: "https://github.com/chaudharyShub",
      description: "Check out my projects"
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-primary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-primary inline-block">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card 
                key={method.title}
                className="p-6 bg-card border-border hover:border-primary transition-all group cursor-pointer"
                onClick={() => window.open(method.href, '_blank')}
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                  <p className="text-primary text-sm font-medium">{method.value}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 md:p-12 bg-card border-border text-center">
          <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
          <p className="text-muted-foreground mb-6">
            Whether you have a project in mind or just want to chat about frontend development,
            I'd love to hear from you.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all hover:scale-105"
            onClick={() => window.location.href = 'mailto:sc07807cs@gmail.com'}
          >
            Send Message
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
