import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const links = [
    { label: "Email", value: "amoulealphonse38@gmail.com", href: "mailto:amoulealphonse38@gmail.com", icon: Mail },
    { label: "Téléphone", value: "+228 70 29 03 66", href: "tel:+22870290366", icon: Phone },
    { label: "Localisation", value: "Lomé — Hédranawoé, Togo", href: "#", icon: MapPin },
  ];

  return (
    <section id="contact" className="py-32 relative bg-hero-gradient grain">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm uppercase tracking-[0.3em] text-primary mb-6">— Contact</div>
            <h2 className="font-display text-5xl lg:text-7xl font-bold leading-[0.95] mb-8">
              On crée quelque chose <span className="text-gradient italic">ensemble</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-10">
              Disponible pour des missions en marketing digital, création de contenu, graphisme ou montage vidéo. N'hésitez pas à m'écrire — je réponds rapidement.
            </p>

            <a
              href="mailto:amoulealphonse38@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-500"
            >
              Démarrer un projet
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-6 p-6 rounded-2xl bg-card-gradient border border-border hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <link.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{link.label}</div>
                  <div className="font-display text-lg font-medium">{link.value}</div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
              </a>
            ))}

            <div className="p-6 rounded-2xl border border-border bg-secondary/30">
              <div className="text-xs uppercase tracking-widest text-primary mb-3">Langues</div>
              <div className="flex flex-wrap gap-2">
                {["Français", "Anglais (débutant)", "Éwé"].map((l) => (
                  <span key={l} className="px-4 py-1.5 rounded-full bg-background border border-border text-sm">{l}</span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-secondary/30">
              <div className="text-xs uppercase tracking-widest text-primary mb-3">Loisirs</div>
              <div className="flex flex-wrap gap-2">
                {["Sport", "Musique", "Manga"].map((l) => (
                  <span key={l} className="px-4 py-1.5 rounded-full bg-background border border-border text-sm">{l}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
