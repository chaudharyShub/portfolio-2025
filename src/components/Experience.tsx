import { Card } from "@/components/ui/card";
import { Briefcase, Wrench } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "IT Industry",
      duration: "3+ Years",
      period: "Recent",
      description: "I work as a Frontend Developer specializing in React.js, Next.js, JavaScript, HTML, and CSS, building responsive, user-friendly interfaces with clean and optimized code. I collaborate closely with teams to translate requirements into functional UI and ensure smooth user experiences. Alongside frontend work, I also have hands-on experience with backend technologies like Node.js, Express, and MongoDB, enabling me to handle APIs, basic server logic, and end-to-end functionality when needed.",
      icon: Briefcase,
      technologies: ["React.js", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind", "TypeScript", "Node.js", "Express.js", "MongoDB", "Electron.js", "Material UI", "Redux", "Git", "REST APIs"]
    },
    {
      title: "Mechanical Engineer",
      company: "Manufactuing Sector",
      duration: "2 Years",
      period: "Previous",
      description: "I led a team of 10–12 technicians in the maintenance department of a bathmat manufacturing plant, overseeing both preventive and breakdown maintenance to ensure uninterrupted production. I developed maintenance schedules, identified root causes of equipment failures, and streamlined repair processes to reduce downtime. I also coordinated closely with production teams, maintained documentation, and ensured adherence to safety and quality standards.",
      icon: Wrench,
      technologies: ["Supervision", "Preventive Maintenance", "Breakdown Maintenance", "Project Management", "Leadership", "Ownership"]
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Career <span className="text-primary inline-block">Journey</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card
                key={index}
                className="p-8 md:p-10 bg-card border-border hover:border-primary transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <p className="text-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-md bg-secondary text-sm text-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
