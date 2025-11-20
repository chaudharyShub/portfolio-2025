import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
      
      <footer className="py-8 px-4 text-center text-muted-foreground border-t border-border">
        <p>© 2024 Frontend Developer Portfolio. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
