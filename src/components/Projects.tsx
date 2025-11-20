import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Built a full-featured e-commerce platform with product management, cart functionality, and secure checkout process using React and Next.js.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "🧾"
    },
    {
      title: "Task Management App",
      description: "Developed a collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "📋"
    },
    {
      title: "Desktop Application",
      description: "Created a cross-platform desktop application using Electron.js with native features and seamless user experience.",
      technologies: ["Electron.js", "React.js", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "💻"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary inline-block">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A showcase of my recent work and contributions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all group"
            >
              <div className="text-6xl mb-4 animate-float-slow">{project.image}</div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-secondary text-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-border hover:border-primary"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
