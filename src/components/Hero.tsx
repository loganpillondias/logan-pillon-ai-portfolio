import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download } from "lucide-react";
import heroImage from "@/assets/logan-portrait.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 grain-texture">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm text-primary font-medium">Disponível para Oportunidades</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Logan Pillon Dias
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-serif italic">
              Desenvolvedor Full Stack em Formação
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              De Eletricista Industrial à Tecnologia — transformando experiência técnica em soluções digitais inovadoras.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-vintage-dark font-semibold transition-all hover:scale-105"
              >
                Ver Projetos
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all"
              >
                <Download className="mr-2 h-4 w-4" />
                Baixar Currículo
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/loganpillondias" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/loganpillondias" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl opacity-50"></div>
            <img 
              src={heroImage} 
              alt="Logan Pillon Dias - Desenvolvedor Full Stack"
              className="relative rounded-2xl shadow-2xl border border-border/50 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
