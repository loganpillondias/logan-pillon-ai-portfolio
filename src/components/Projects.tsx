import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Task Assistant",
      description: "Assistente inteligente de tarefas integrado com APIs de IA (OpenAI/Google Gemini) para sugestões automáticas, priorização e análise de produtividade.",
      technologies: ["React", "TypeScript", "Node.js", "OpenAI API", "Supabase"],
      featured: true,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Workflow Automation Hub",
      description: "Plataforma de automação utilizando N8N para criar fluxos de trabalho personalizados conectando diferentes serviços e APIs.",
      technologies: ["N8N", "Node.js", "Express", "PostgreSQL", "Webhooks"],
      featured: true,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-Commerce Dashboard",
      description: "Dashboard completo para gerenciamento de e-commerce com análise de vendas, gestão de produtos e integração com APIs de pagamento.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      featured: false,
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-Time Chat Application",
      description: "Aplicação de chat em tempo real com suporte a múltiplas salas, notificações e compartilhamento de arquivos.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      featured: false,
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="container max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Projetos em Destaque
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Soluções desenvolvidas com foco em qualidade, performance e experiência do usuário
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`group relative p-6 rounded-xl border transition-all hover:scale-[1.02] ${
                  project.featured 
                    ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 hover:border-primary' 
                    : 'bg-card/50 border-border/50 hover:border-accent/50'
                }`}
              >
                {project.featured && (
                  <div className="absolute -top-3 -right-3">
                    <Badge className="bg-primary text-vintage-dark font-semibold shadow-lg">
                      <Sparkles className="w-3 h-3 mr-1" />
                      IA/Automação
                    </Badge>
                  </div>
                )}
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-border/50 hover:bg-accent/10 hover:border-accent transition-all"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
