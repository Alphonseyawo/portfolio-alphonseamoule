import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: "Bonjour 👋 Je suis l'assistant du portfolio d'Alphonse. Posez-moi vos questions sur ses services, son parcours ou pour le contacter." }]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }); }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const newMsgs: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${ANON}` },
        body: JSON.stringify({ messages: newMsgs }),
      });
      if (res.status === 429) { toast.error("Trop de messages. Réessayez dans un instant."); setLoading(false); return; }
      if (res.status === 402) { toast.error("Service IA temporairement indisponible."); setLoading(false); return; }
      if (!res.ok || !res.body) { toast.error("Erreur du chatbot."); setLoading(false); return; }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistant = "";
      setMessages((m) => [...m, { role: "assistant", content: "" }]);
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") continue;
          try {
            const json = JSON.parse(data);
            const delta = json.choices?.[0]?.delta?.content;
            if (delta) {
              assistant += delta;
              setMessages((m) => { const copy = [...m]; copy[copy.length - 1] = { role: "assistant", content: assistant }; return copy; });
            }
          } catch { /* skip */ }
        }
      }
    } catch { toast.error("Impossible de joindre le chatbot."); }
    finally { setLoading(false); }
  };

  return (
    <>
      <button onClick={() => setOpen(!open)} aria-label="Ouvrir le chatbot" className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-105 transition-transform">{open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}</button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ duration: 0.2 }} className="fixed bottom-24 right-3 sm:right-5 left-3 sm:left-auto z-50 sm:w-[380px] max-h-[70vh] flex flex-col bg-background border border-border rounded-3xl shadow-elevated overflow-hidden">
            <div className="px-5 py-4 border-b border-border bg-card-gradient flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center"><MessageCircle className="w-4 h-4 text-primary" /></div>
              <div className="flex-1"><div className="font-display font-semibold text-sm">Assistant d'Alphonse</div><div className="text-xs text-muted-foreground flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> En ligne</div></div>
            </div>
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${m.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-secondary text-foreground rounded-bl-sm"}`}>{m.content || (loading && i === messages.length - 1 ? "…" : "")}</div>
                </div>
              ))}
              {loading && messages[messages.length - 1]?.role === "user" && (<div className="flex justify-start"><div className="bg-secondary px-4 py-2.5 rounded-2xl rounded-bl-sm"><Loader2 className="w-4 h-4 animate-spin text-muted-foreground" /></div></div>)}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); send(); }} className="p-3 border-t border-border flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Posez votre question…" disabled={loading} maxLength={500} className="flex-1 px-4 py-2.5 rounded-full bg-secondary border border-border focus:border-primary outline-none text-sm" />
              <button type="submit" disabled={loading || !input.trim()} className="w-10 h-10 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:shadow-glow transition-all disabled:opacity-50" aria-label="Envoyer"><Send className="w-4 h-4" /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
