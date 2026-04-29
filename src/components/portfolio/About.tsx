import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  const stats = [
    { value: "2025", label: "Stage Groupe Ecom" },
    { value: "5+", label: "Certifications" },
    { value: "3", label: "Plateformes maîtrisées" },
  ];

  const timeline = [
    {
      icon: Briefcase,
      date: "Juil. — Oct. 2025",
      title: "Stage Communication Digitale & Graphiste",
      org: "Groupe Ecom Sarl U",
      desc: "Création de visuels et carrousels pour le projet RSE Learn, rédaction d'articles, montage vidéo, gestion TikTok & Instagram.",
    },
    {
      icon: GraduationCap,
      date: "Oct. 2023 — Présent",
      title: "Licence Marketing Digital & E-commerce",
      org: "ESCEN — École Supérieure de Commerce et d'Économie Numérique",
      desc: "Formation approfondie aux stratégies digitales, e-commerce et performance marketing.",
    },
    {
      icon: GraduationCap,
      date: "Oct. 2023 — Présent",
      title: "Licence Fondamentale en Français",
      org: "Université de Lomé",
      desc: "Maîtrise de la langue, de l'écriture et de l'analyse — un socle essentiel pour la création de contenus.",
    },
    {
      icon: Award,
      date: "2025",
      title: "Certifications Marketing & Digital",
      org: "Brevo, HubSpot Academia, Blemama, Atingi, Néhémiah Education",
      desc: "Email marketing, automatisation, gestion de projet, réseaux sociaux et création de chatbot.",
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-primary mb-6">— À propos</div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-8">
            Curieux, proactif, <span className="text-gradient italic">passionné</span> par tout ce qui crée du lien.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Passionné par la communication et le marketing digital, j'ai développé mes compétences dans la gestion des réseaux sociaux (TikTok, Instagram, Facebook) et la création de contenus. Je me suis formé en graphisme, ce qui me permet de créer des visuels attractifs. Je suis curieux, proactif et motivé d'apprendre davantage.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card-gradient border border-border rounded-3xl p-8"
            >
              <div className="font-display text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h3 className="font-display text-3xl font-bold mb-4">Parcours & Formation</h3>
            <p className="text-muted-foreground">Une trajectoire alliant formation académique solide et apprentissage continu sur le terrain.</p>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
              >
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="text-xs uppercase tracking-widest text-primary mb-2">{item.date}</div>
                <h4 className="font-display text-xl font-semibold mb-1">{item.title}</h4>
                <div className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                  <item.icon className="w-4 h-4" /> {item.org}
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
