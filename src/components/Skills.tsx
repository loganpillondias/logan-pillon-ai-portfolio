import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design"
    ],
    backend: [
      "Node.js",
      "Express",
      "TypeScript",
      "RESTful APIs",
      "SQL",
      "PostgreSQL",
      "MySQL"
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "N8N",
      "AI Integration",
      "OpenAI API",
      "Google Gemini"
    ]
  };

  return (
    <section id="skills" className="py-20 px-4 grain-texture">
      <div className="container max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Skills Técnicas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tecnologias e ferramentas que utilizo para criar soluções web modernas e eficientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 bg-card/50 backdrop-blur rounded-xl border border-border/50 hover:border-primary/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold">Front-End</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="space-y-4 p-6 bg-card/50 backdrop-blur rounded-xl border border-border/50 hover:border-accent/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold">Back-End</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="outline"
                    className="border-accent/30 hover:bg-accent/10 hover:border-accent transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="space-y-4 p-6 bg-card/50 backdrop-blur rounded-xl border border-border/50 hover:border-emerald/50 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-emerald/20 flex items-center justify-center">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-2xl font-bold">Ferramentas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="outline"
                    className="border-emerald/30 hover:bg-emerald/10 hover:border-emerald transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
