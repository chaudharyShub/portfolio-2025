import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = [
    { name: "JavaScript", category: "Language" },
    { name: "React.js", category: "Framework" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    // { name: "HTML5", category: "Markup" },
    // { name: "CSS3", category: "Styling" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Electron.js", category: "Desktop" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "SQL", category: "Database" },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Tech <span className="text-primary inline-block">Stack</span>
        </h2>

        <Card className="p-8 md:p-12 bg-card border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group p-6 rounded-lg bg-secondary border border-border hover:border-primary transition-all animate-bounce-slow"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {skill.category}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
