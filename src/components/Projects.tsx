import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "SportZentric",
      description: "Developed a sports-tech platform enabling coaches to create and manage training batches, allowing athletes to seamlessly join and enhance their skills through structured sessions and events.",
      technologies: ["React.js", "Tailwind CSS", "React hook form", "Styled Components", "RTK Quesr"],
      liveUrl: "javascript:void(0);",
      image: "🏀"
    },
    {
      title: "RunTheDay (RTD)",
      description: "Built a US-based online race/marathon registration and result publishing platform with real-time user interactions, supporting diverse roles including Race Directors, Race Runners, and Volunteers.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Redux", "Material UI"],
      liveUrl: "https://runtheday.com",
      image: "🏃"
    },
    {
      title: "Desktop Application",
      description: "Built a cross-platform (Windows & Linux) desktop application with a background service to monitor and log system activity, capturing power on/off events and sleep/wake cycles with high accuracy.",
      technologies: ["Electron.js", "React.js", "Node.js", "MQTT", "Redux"],
      liveUrl: "javascript:void(0);",
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
                  disabled={project.liveUrl === "javascript:void(0);"}
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary/10 hover:text-white"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
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
