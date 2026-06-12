import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const projects = [
  { n: "01", category: "Communication digitale & Marketing · Groupe Ecom & Solve Consult International", title: "Groupe Ecom & Solve Consult International", desc: "Deux stages en communication digitale et marketing : conception de visuels, carrousels et contenus éditoriaux, rédaction d'articles et de newsletters, montage vidéo, community management.", tags: ["Carrousels", "Articles blog", "Newsletters", "TikTok", "Instagram"], href: "/projets/rse-learn" },
  { n: "02", category: "Création de contenu · Vidéo", title: "Montage & Production sociale", desc: "Production de vidéos courtes optimisées pour les formats verticaux. Découpage, sous-titrage et habillage graphique.", tags: ["CapCut", "VN", "Reels"] },
  { n: "03", category: "Email Marketing · Automation", title: "Campagnes Brevo & Workflows", desc: "Mise en place de campagnes emailing et de scénarios d'automatisation, depuis la segmentation jusqu'à la mesure des performances.", tags: ["Brevo", "HubSpot", "Automation"], href: "https://my.brevo.com/template/_XMzKbcCCSxlVas95gckEsrm64sa4vJXyM3OmnWXULv4mwiiiDME6K7sja4" },
  { n: "04", category: "Design graphique · Réseaux sociaux", title: "Autres réalisations — Visuels & affiches", desc: "Une galerie de visuels conçus pour des conférences, campagnes et programmes : affiches, posts Instagram et supports promotionnels.", tags: ["Canva", "Photoshop", "Affiches", "Posts"], href: "/projets/autres-realisations" },
];

const Projects = () => (
  <section id="projects" className="py-32 relative">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.3em] text-primary mb-6">— Projets sélectionnés</div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight">Quelques réalisations <span className="text-gradient italic">récentes</span>.</h2>
        </div>
        <p className="text-muted-foreground max-w-sm">Une sélection de missions menées pendant mon stage et mes projets personnels — du contenu éditorial au design social.</p>
      </motion.div>

      <div className="space-y-4">
        {projects.map((project, i) => {
          const target = project.href ?? "#contact";
          const isInternal = target.startsWith("/");
          const Comp: any = isInternal ? MotionLink : motion.a;
          const linkProps = isInternal ? { to: target } : { href: target };
          return (
            <Comp key={project.n} {...linkProps} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group block bg-card-gradient border border-border rounded-3xl p-8 lg:p-12 hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1"><div className="font-display text-5xl font-bold text-muted-foreground/40 group-hover:text-primary transition-colors">{project.n}</div></div>
                <div className="lg:col-span-7">
                  <div className="text-xs uppercase tracking-widest text-primary mb-3">{project.category}</div>
                  <h3 className="font-display text-2xl lg:text-4xl font-semibold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{project.desc}</p>
                </div>
                <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end">{project.tags.map((tag) => (<span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary border border-border text-muted-foreground">{tag}</span>))}</div>
                <div className="lg:col-span-1 flex lg:justify-end"><div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-500"><ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" /></div></div>
              </div>
            </Comp>
          );
        })}
      </div>
    </div>
  </section>
);

export default Projects;
