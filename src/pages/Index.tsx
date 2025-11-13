import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AIAssistant from "@/components/AIAssistant";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AIAssistant />
      <Contact />
      
      <footer className="py-8 px-4 border-t border-border/30 bg-card/20">
        <div className="container max-w-6xl">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2025 Logan Pillon Dias. Desenvolvido com React, TypeScript e Tailwind CSS.
            </p>
            <p className="text-xs text-muted-foreground">
              Portfólio em constante evolução 🚀
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
