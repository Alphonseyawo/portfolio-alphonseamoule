import { motion } from "framer-motion";
import { Palette, Video, Mail, Share2, Layout, Bot } from "lucide-react";

const services = [
  { icon: Share2, title: "Gestion réseaux sociaux", desc: "Stratégie, planification et publication sur TikTok, Instagram et Facebook pour engager votre audience.", tags: ["TikTok", "Instagram", "Facebook"] },
  { icon: Palette, title: "Graphisme & Design", desc: "Création de visuels, carrousels et identités attractives qui racontent votre marque.", tags: ["Photoshop", "Canva", "Figma"] },
  { icon: Video, title: "Montage vidéo", desc: "Production de contenus vidéo dynamiques pour les réseaux sociaux et campagnes digitales.", tags: ["CapCut", "VN"] },
  { icon: Mail, title: "Email Marketing", desc: "Campagnes d'emailing et automatisation marketing pour fidéliser et convertir vos prospects.", tags: ["Brevo", "HubSpot"] },
  { icon: Layout, title: "UX/UI Design", desc: "Interfaces simples, claires et orientées utilisateur (niveau débutant en progression constante).", tags: ["Figma"] },
  { icon: Bot, title: "Création de chatbot", desc: "Mise en place de chatbots intelligents pour automatiser la relation client et les conversions.", tags: ["Stratégie", "Automation"] },
];

const Services = () => (
  <section id="services" className="py-32 bg-secondary/30 relative">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="max-w-3xl mb-20">
        <div className="text-sm uppercase tracking-[0.3em] text-primary mb-6">— Services & Compétences</div>
        <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight">Tout ce qu'il faut pour faire <span className="text-gradient italic">briller</span> votre marque en ligne.</h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -6 }} className="group relative bg-card-gradient border border-border rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500"><service.icon className="w-6 h-6" /></div>
              <h3 className="font-display text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
              <div className="flex flex-wrap gap-2">{service.tags.map((tag) => (<span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary border border-border text-muted-foreground">{tag}</span>))}</div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.6 }} className="mt-16 flex flex-wrap gap-3 justify-center">
        {["Esprit d'équipe", "Flexibilité", "Communication", "Adaptabilité", "Gestion de projet", "Curiosité"].map((skill) => (<span key={skill} className="px-5 py-2 rounded-full border border-border bg-background/50 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">{skill}</span>))}
      </motion.div>
    </div>
  </section>
);

export default Services;
