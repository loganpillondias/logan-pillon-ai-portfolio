import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Send, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Aqui você pode integrar com N8N webhook
      // const webhookUrl = "SUA_URL_DO_N8N_WEBHOOK_AQUI";
      // await fetch(webhookUrl, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">
              Vamos Desenvolver Algo Juntos?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Estou disponível para novos projetos e oportunidades. Entre em contato e vamos conversar!
            </p>
          </div>
          
          <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={isSubmitting}
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={isSubmitting}
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-me sobre seu projeto ou oportunidade..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={isSubmitting}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-vintage-dark font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </Card>
          
          <div className="text-center">
            <a 
              href="mailto:logan.pillon@email.com"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              logan.pillon@email.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
