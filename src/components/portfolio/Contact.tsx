import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Send, Loader as Loader2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { createClient } from "@supabase/supabase-js";

const schema = z.object({
  name: z.string().trim().min(1, "Nom requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  message: z.string().trim().min(1, "Message requis").max(2000),
});

const Contact = () => {
  const links = [
    { label: "Email", value: "amoulealphonse38@gmail.com", href: "mailto:amoulealphonse38@gmail.com", icon: Mail },
    { label: "Téléphone / WhatsApp", value: "+228 70 29 03 66", href: "https://wa.me/22870290366", icon: Phone },
    { label: "Localisation", value: "Lomé — Hédranawoé, Togo", href: "https://www.google.com/maps/search/?api=1&query=Lom%C3%A9%20H%C3%A9dranawo%C3%A9%20Togo", icon: MapPin },
  ];

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) { toast.error(parsed.error.issues[0].message); return; }
    setLoading(true);
    const backendUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
    const backendKey = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY) as string | undefined;
    if (!backendUrl || !backendKey) {
      const subject = encodeURIComponent(`Message portfolio — ${parsed.data.name}`);
      const body = encodeURIComponent(`${parsed.data.message}\n\nNom: ${parsed.data.name}\nEmail: ${parsed.data.email}`);
      window.location.href = `mailto:amoulealphonse38@gmail.com?subject=${subject}&body=${body}`;
      setLoading(false);
      toast.success("Votre application email va s'ouvrir pour envoyer le message.");
      return;
    }
    const supabase = createClient(backendUrl, backendKey);
    const { error } = await supabase.from("contact_messages").insert({ name: parsed.data.name, email: parsed.data.email, message: parsed.data.message });
    setLoading(false);
    if (error) { toast.error("Impossible d'envoyer le message. Réessayez."); return; }
    toast.success("Message envoyé ! Je vous réponds rapidement.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative bg-hero-gradient grain">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}>
            <div className="text-sm uppercase tracking-[0.3em] text-primary mb-6">— Contact</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[0.95] mb-8">On crée quelque chose <span className="text-gradient italic">ensemble</span>?</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed mb-10">Disponible pour des missions en marketing digital, création de contenu, graphisme ou montage vidéo.</p>
            <div className="space-y-3 mb-10">
              {links.map((link) => (
                <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-card-gradient border border-border hover:border-primary/40 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0"><link.icon className="w-5 h-5" /></div>
                  <div className="flex-1 min-w-0"><div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{link.label}</div><div className="font-display text-sm sm:text-base font-medium truncate">{link.value}</div></div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all shrink-0" />
                </a>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 sm:p-5 rounded-2xl border border-border bg-secondary/30">
                <div className="text-xs uppercase tracking-widest text-primary mb-3">Langues</div>
                <div className="flex flex-wrap gap-1.5">{["Français", "Anglais", "Éwé"].map((l) => (<span key={l} className="px-2.5 py-1 rounded-full bg-background border border-border text-xs">{l}</span>))}</div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl border border-border bg-secondary/30">
                <div className="text-xs uppercase tracking-widest text-primary mb-3">Loisirs</div>
                <div className="flex flex-wrap gap-1.5">{["Sport", "Musique", "Manga"].map((l) => (<span key={l} className="px-2.5 py-1 rounded-full bg-background border border-border text-xs">{l}</span>))}</div>
              </div>
            </div>
          </motion.div>

          <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-card-gradient border border-border rounded-3xl p-6 sm:p-8 space-y-5">
            <div><label className="text-xs uppercase tracking-widest text-primary mb-2 block">Votre nom</label><input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required placeholder="Jean Dupont" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-colors" /></div>
            <div><label className="text-xs uppercase tracking-widest text-primary mb-2 block">Votre email</label><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required placeholder="vous@exemple.com" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-colors" /></div>
            <div><label className="text-xs uppercase tracking-widest text-primary mb-2 block">Votre message</label><textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={2000} required rows={6} placeholder="Parlez-moi de votre projet…" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-colors resize-none" /></div>
            <button type="submit" disabled={loading} className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-500 disabled:opacity-60">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />}
              {loading ? "Envoi en cours…" : "Envoyer le message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
