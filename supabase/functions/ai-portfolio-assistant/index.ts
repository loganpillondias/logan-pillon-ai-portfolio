import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question } = await req.json();
    console.log("Received question:", question);

    if (!question) {
      throw new Error("Question is required");
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const portfolioContext = `
      Logan Pillon Dias é um Desenvolvedor Full Stack em formação que iniciou sua carreira como Eletricista Industrial.
      
      Skills Front-End: HTML5, CSS3, JavaScript (ES6+), React.js, TypeScript, Tailwind CSS, Responsive Design
      Skills Back-End: Node.js, Express, TypeScript, RESTful APIs, SQL, PostgreSQL, MySQL
      Ferramentas: Git, GitHub, VS Code, N8N, AI Integration, OpenAI API, Google Gemini
      
      Projetos principais:
      1. AI Task Assistant - Assistente inteligente integrado com APIs de IA para gerenciamento de tarefas
      2. Workflow Automation Hub - Plataforma de automação com N8N para fluxos personalizados
      3. E-Commerce Dashboard - Dashboard completo para gerenciamento com análise de vendas
      4. Real-Time Chat Application - Chat em tempo real com Socket.io
      
      Logan está em busca de oportunidades como Desenvolvedor Web ou Full Stack, com foco especial em Front-End moderno
      e Back-End com Node.js/TypeScript. Ele valoriza precisão, planejamento e pensamento analítico, características
      desenvolvidas durante sua experiência industrial.
    `;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `Você é um assistente de IA que responde perguntas sobre o portfólio de Logan Pillon Dias. 
            Use o contexto fornecido para dar respostas precisas e relevantes. Seja profissional, objetivo e amigável.
            Responda em português brasileiro. Se a pergunta não estiver relacionada ao portfólio, educadamente 
            redirecione para tópicos relevantes sobre as habilidades e projetos de Logan.
            
            Contexto do Portfólio:
            ${portfolioContext}`
          },
          {
            role: "user",
            content: question
          }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const answer = data.choices[0].message.content;

    console.log("AI response generated successfully");

    return new Response(
      JSON.stringify({ answer }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in ai-portfolio-assistant:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
