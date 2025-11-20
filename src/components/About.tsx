import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-primary inline-block">Me</span>
        </h2>
        
        <Card className="p-8 md:p-12 bg-card border-border">
          <div className="space-y-6 text-lg leading-relaxed text-foreground">
            <p>
              With <span className="text-primary font-semibold">5+ years of total experience</span>, 
              I've navigated a unique career path that combines engineering precision with creative 
              web development.
            </p>
            
            <p>
              After spending 2 years as a <span className="text-primary font-semibold">Mechanical Engineer</span>, 
              I discovered my passion for building digital experiences. I made the leap into frontend 
              development and haven't looked back since.
            </p>
            
            <p>
              For the past <span className="text-primary font-semibold">3+ years</span>, I've been crafting 
              responsive, user-centric web applications using modern technologies. My engineering background 
              gives me a unique perspective on problem-solving, attention to detail, and systematic thinking.
            </p>
            
            <p>
              I specialize in creating seamless user experiences and writing clean, maintainable code 
              that scales. Whether it's building dynamic web apps with React, optimizing performance, 
              or implementing pixel-perfect designs, I bring dedication and expertise to every project.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
