// Edge function: AI chatbot for Alphonse's portfolio
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Tu es l'assistant virtuel du portfolio d'Alphonse Yawo AMOULE, spécialiste en Marketing Digital & Communication basé à Lomé, Togo.

À propos d'Alphonse :
- Étudiant en Licence Marketing Digital & E-commerce à l'ESCEN (Oct. 2023 — Présent)
- Bac Série A au Lycée d'Amoussimé (2022-2023)
- Stage Communication Digitale & Marketing chez Solve Consult International (Mars-Juin 2025) : visuels, carrousels, teasers, articles de blog, newsletters, montage vidéo, community management
- Stage Communication Digitale & Marketing chez Groupe Ecom Sarl U (Juil-Nov 2025) : visuels et carrousels pour le projet RSE Learn, articles, montage, publications TikTok & Instagram
- Certifications : Brevo, HubSpot Academia, Blemama, Néhémiah Éducation, HP LIFE (email marketing, automation, réseaux sociaux, stratégies digitales)
- Compétences : Social Media, Graphisme, Email Marketing, Montage Vidéo, Stratégie Digitale, Community Management
- Langues : Français, Anglais (débutant), Éwé
- Loisirs : Sport, Musique, Manga
- Contact : amoulealphonse38@gmail.com, +228 70 29 03 66

Réponds de façon brève, chaleureuse et professionnelle en français. Si on te demande de le contacter, donne son email/téléphone ou invite à utiliser le formulaire de contact du site.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY manquant");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        stream: true,
      }),
    });

    if (response.status === 429) {
      return new Response(JSON.stringify({ error: "Trop de requêtes. Réessayez dans un instant." }), {
        status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (response.status === 402) {
      return new Response(JSON.stringify({ error: "Crédits IA épuisés." }), {
        status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!response.ok) {
      const t = await response.text();
      return new Response(JSON.stringify({ error: t }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
