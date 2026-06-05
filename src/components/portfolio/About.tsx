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
  ];

  const certifications = [
    {
      org: "Brevo",
      title: "Email Marketing & Automatisation",
      desc: "Maîtrise des campagnes d'email marketing, segmentation d'audience et automatisation des workflows.",
    },
    {
      org: "HubSpot Academia",
      title: "Marketing Digital & Inbound",
      desc: "Stratégies inbound marketing, génération de leads et gestion de la relation client.",
    },
    {
      org: "Blemama",
      title: "Réseaux Sociaux & Stratégie Digitale",
      desc: "Conception et déploiement de stratégies social media performantes adaptées au marché africain.",
    },
    {
      org: "Néhémiah Éducation",
      title: "E-mails professionnels",
      desc: "Rédaction professionnelle, étiquette numérique et communication écrite efficace en contexte business.",
    },
    {
      org: "HP LIFE",
      title: "Formation immersive intensive",
      desc: "Compétences entrepreneuriales, business digital et outils numériques pour développer son activité.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-primary mb-6">— À propos</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-8">
            Curieux, proactif, <span className="text-gradient italic">passionné</span> par tout ce qui crée du lien.
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              La communication et le marketing digital sont pour moi bien plus qu'un domaine d'activité&nbsp;: c'est un terrain de jeu où chaque idée peut devenir une histoire, et chaque histoire un véritable lien avec une audience. J'évolue au quotidien dans cet univers en perpétuel mouvement, où les tendances changent vite et où il faut savoir capter l'attention en quelques secondes.
            </p>
            <p>
              Au fil des projets, j'ai appris à penser une présence digitale dans sa globalité&nbsp;: comprendre une cible, définir une ligne éditoriale, imaginer des formats adaptés à chaque plateforme — <span className="text-foreground">TikTok</span> pour la créativité brute, <span className="text-foreground">Instagram</span> pour l'esthétique et la communauté, <span className="text-foreground">Facebook</span> pour la proximité — puis mesurer ce qui fonctionne réellement afin d'ajuster la stratégie.
            </p>
            <p>
              Ma formation en graphisme me permet de prolonger cette réflexion jusqu'au visuel&nbsp;: carrousels, posts, miniatures, identités de marque. Je conçois chaque création comme un outil au service d'un message — clair, cohérent et marquant.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-20 sm:mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card-gradient border border-border rounded-3xl p-6 sm:p-8"
            >
              <div className="font-display text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-24">
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">Parcours & Formation</h3>
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
                className="group relative pl-6 sm:pl-8 border-l-2 border-border hover:border-primary transition-colors"
              >
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="text-xs uppercase tracking-widest text-primary mb-2">{item.date}</div>
                <h4 className="font-display text-lg sm:text-xl font-semibold mb-1">{item.title}</h4>
                <div className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                  <item.icon className="w-4 h-4 shrink-0" /> {item.org}
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">Certifications</h3>
            <p className="text-muted-foreground">Formations et programmes suivis pour rester à la pointe des stratégies digitales et marketing.</p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.org}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card-gradient border border-border rounded-3xl p-5 sm:p-6 hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="text-xs uppercase tracking-widest text-primary mb-2">{cert.org}</div>
                <h4 className="font-display text-base sm:text-lg font-semibold mb-2">{cert.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
