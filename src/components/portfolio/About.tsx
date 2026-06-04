import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  const stats = [
    { value: "2x", label: "Stages en communication digitale" },
    { value: "6+", label: "Certifications" },
    { value: "8+", label: "Outils maîtrisés" },
  ];

  const timeline = [
    {
      icon: Briefcase,
      date: "Mars — Juin 2025",
      title: "Stage Communication Digitale & Marketing",
      org: "Solve Consult International (SCI)",
      desc: "Création de visuels, carrousels et teasers, rédaction d'articles de blog et de newsletters engageantes, montage vidéo et community management.",
    },
    {
      icon: Briefcase,
      date: "Juil. — Nov. 2025",
      title: "Stage Communication Digitale & Marketing",
      org: "Groupe Ecom Sarl U",
      desc: "Création de visuels et carrousels pour le projet RSE Learn, rédaction d'articles de blog et de légendes, montage vidéo, publication de contenus sur TikTok & Instagram.",
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
      date: "Sept. 2022 — Juil. 2023",
      title: "Baccalauréat Série A",
      org: "Lycée d'Amoussimé",
      desc: "Obtention du baccalauréat littéraire — un socle solide en expression écrite et en analyse.",
    },
    {
      icon: Award,
      date: "2024 — 2025",
      title: "Certifications Marketing & Digital",
      org: "Brevo, HubSpot Academia, Blemama, Néhémiah Éducation, HP LIFE",
      desc: "Email marketing, automatisation, réseaux sociaux et stratégies digitales, e-mails professionnels et formation immersive intensive.",
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
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              La communication et le marketing digital sont pour moi bien plus qu'un domaine d'activité&nbsp;: c'est un terrain de jeu où chaque idée peut devenir une histoire, et chaque histoire un véritable lien avec une audience. J'évolue au quotidien dans cet univers en perpétuel mouvement, où les tendances changent vite et où il faut savoir capter l'attention en quelques secondes.
            </p>
            <p>
              Au fil des projets, j'ai appris à penser une présence digitale dans sa globalité&nbsp;: comprendre une cible, définir une ligne éditoriale, imaginer des formats adaptés à chaque plateforme — <span className="text-foreground">TikTok</span> pour la créativité brute, <span className="text-foreground">Instagram</span> pour l'esthétique et la communauté, <span className="text-foreground">Facebook</span> pour la proximité — puis mesurer ce qui fonctionne réellement afin d'ajuster la stratégie.
            </p>
            <p>
              Ma formation en graphisme me permet de prolonger cette réflexion jusqu'au visuel&nbsp;: carrousels, posts, miniatures, identités de marque. Je conçois chaque création comme un outil au service d'un message — clair, cohérent et marquant. J'aime aussi explorer le montage vidéo, l'email marketing et les outils d'automatisation, parce qu'une bonne communication, aujourd'hui, c'est avant tout une expérience complète.
            </p>
            <p>
              Curieux, rigoureux et profondément orienté résultats, je cherche à apprendre en continu, à confronter mes idées au terrain et à collaborer avec des équipes qui croient au pouvoir d'une histoire bien racontée.
            </p>
          </div>
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
