import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Tu es l'assistant virtuel du portfolio d'Alphonse Yawo AMOULE, spécialiste en Marketing Digital & Communication basé à Lomé, Togo.

À propos d'Alphonse :
- Étudiant en Licence Marketing Digital & E-commerce à l'ESCEN (Oct. 2023 — Présent)
- Stage Communication Digitale & Marketing chez Solve Consult International (Mars-Juin 2025)
- Stage Communication Digitale & Marketing chez Groupe Ecom Sarl U (Juil-Nov 2025)
- Certifications : Brevo, HubSpot Academia, Blemama, Néhémiah Éducation, HP LIFE
- Compétences : Social Media, Graphisme, Email Marketing, Montage Vidéo, Stratégie Digitale
- Contact : amoulealphonse38@gmail.com, +228 70 29 03 66

Réponds de façon brève, chaleureuse et professionnelle en français.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json();
    const rawMessages = body?.messages;

    if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
      return new Response(JSON.stringify({ error: "Requête invalide." }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const messages: Array<{ role: "user" | "assistant"; content: string }> = [];
    for (const m of rawMessages) {
      if (!m || typeof m !== "object") return new Response(JSON.stringify({ error: "Message invalide." }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      const { role, content } = m;
      if (role !== "user" && role !== "assistant") return new Response(JSON.stringify({ error: "Rôle non autorisé." }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (typeof content !== "string" || content.length === 0 || content.length > 1000) return new Response(JSON.stringify({ error: "Contenu invalide." }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      messages.push({ role, content });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) return new Response(JSON.stringify({ error: "Erreur interne." }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "google/gemini-2.5-flash", messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages], stream: true }),
    });

    if (response.status === 429) return new Response(JSON.stringify({ error: "Trop de requêtes." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (response.status === 402) return new Response(JSON.stringify({ error: "Crédits IA épuisés." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    if (!response.ok) return new Response(JSON.stringify({ error: "Erreur interne." }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    return new Response(response.body, { headers: { ...corsHeaders, "Content-Type": "text/event-stream" } });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Erreur interne." }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
