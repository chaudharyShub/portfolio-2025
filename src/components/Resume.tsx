import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary inline-block">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Download my complete professional resume
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border text-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-primary" />
          </div>

          <h3 className="text-2xl font-bold mb-4">Professional Resume</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a comprehensive overview of my professional experience, skills, education,
            and achievements. Available in PDF format for easy viewing and printing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all hover:scale-105"
              onClick={() => {
                // Replace with your actual resume URL
                window.open('/Shubham_works.pdf', '_blank');
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:text-white"
              onClick={() => {
                window.open('/Shubham_works.pdf', '_blank');
              }}
            >
              <FileText className="mr-2 h-5 w-5" />
              View Online
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Last updated: November 2025 • PDF Format • 1 page
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
