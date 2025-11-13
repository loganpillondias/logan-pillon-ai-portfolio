import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Sparkles, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const AIAssistant = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAsk = async () => {
    if (!question.trim()) {
      toast({
        title: "Pergunta vazia",
        description: "Por favor, digite uma pergunta sobre o portfólio.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setAnswer("");

    try {
      const { data, error } = await supabase.functions.invoke("ai-portfolio-assistant", {
        body: { question },
      });

      if (error) throw error;

      setAnswer(data.answer);
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Erro",
        description: "Não foi possível processar sua pergunta. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-20 px-4 grain-texture">
      <div className="container max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Powered by AI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Assistente IA do Logan
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Faça perguntas sobre minhas skills, experiência ou projetos. O assistente de IA responderá com base no conteúdo do meu portfólio.
            </p>
          </div>
          
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
            <div className="space-y-4">
              <div className="flex gap-3">
                <Input
                  placeholder="Ex: Quais são as principais skills do Logan?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAsk()}
                  disabled={isLoading}
                  className="flex-1 bg-background/50 border-border/50 focus:border-accent"
                />
                <Button 
                  onClick={handleAsk}
                  disabled={isLoading}
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Perguntar
                    </>
                  )}
                </Button>
              </div>
              
              {answer && (
                <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg animate-fade-in">
                  <p className="text-sm font-semibold text-primary mb-2">Resposta da IA:</p>
                  <p className="text-foreground/90 leading-relaxed">{answer}</p>
                </div>
              )}
              
              {!answer && !isLoading && (
                <div className="p-4 bg-muted/30 rounded-lg text-center">
                  <p className="text-sm text-muted-foreground">
                    As respostas serão exibidas aqui após você fazer uma pergunta
                  </p>
                </div>
              )}
            </div>
          </Card>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>Experimente perguntar sobre projetos, tecnologias ou experiência profissional!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
