const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="container max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90">
              Minha jornada profissional começou no setor industrial, onde atuei como{" "}
              <span className="text-primary font-semibold">Eletricista Industrial</span>, desenvolvendo 
              expertise em sistemas elétricos complexos e resolução de problemas técnicos. Essa experiência 
              me ensinou a importância da precisão, planejamento e pensamento analítico.
            </p>
            
            <p className="text-foreground/90">
              A transição para a tecnologia surgiu de uma paixão genuína por criar soluções digitais que 
              impactem positivamente a vida das pessoas. Hoje, estou em formação como{" "}
              <span className="text-accent font-semibold">Desenvolvedor Full Stack</span>, focando 
              especialmente em Front-End moderno e Back-End robusto com Node.js e TypeScript.
            </p>
            
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-6 mt-8">
              <p className="text-foreground/90 italic">
                "Estou em busca de oportunidades como <strong>Desenvolvedor Web ou Full Stack</strong> onde 
                possa aplicar minha dedicação, rapidez de aprendizado e paixão por tecnologia para contribuir 
                com projetos inovadores e continuar crescendo profissionalmente."
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência Industrial</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Projetos Desenvolvidos</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-emerald">100%</div>
                <div className="text-sm text-muted-foreground">Dedicação & Paixão</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
