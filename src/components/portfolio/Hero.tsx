import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, FileDown } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import cvAsset from "@/assets/cv-alphonse-amoule.pdf.asset.json";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero-gradient grain overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/40 backdrop-blur-sm text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Disponible pour de nouveaux projets
          </div>

          <h1 data-no-reveal className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            <SplitLine text="Marketing digital" startDelay={0.2} />
            <br />
            <SplitLine text="&" className="text-gradient italic font-medium" startDelay={0.7} />
            <br />
            <SplitLine text="communication." className="text-primary" startDelay={0.85} />
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Je suis <span className="text-foreground font-medium">Alphonse Yawo AMOULE</span>, créateur de contenus et stratège digital. Je transforme les idées en visuels qui captent et en campagnes qui convertissent.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Lomé, Togo</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> amoulealphonse38@gmail.com</span>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all duration-500 lv-cta-glow"
            >
              Voir mes projets
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              Me contacter
            </a>
            <a
              href={cvAsset.url}
              target="_blank"
              rel="noopener noreferrer"
              download="CV-Alphonse-AMOULE.pdf"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <FileDown className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              Télécharger CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-square w-full max-w-md mx-auto lv-float">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-primary/30 shadow-elevated bg-card-gradient">
              <img
                src={portrait}
                alt="Portrait de Alphonse Yawo AMOULE"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "50% 30%" }}
              />
            </div>



            {/* Floating badges */}

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-16 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-glow"
            >
              <div className="text-xs opacity-80">Projets</div>
              <div className="font-display font-bold text-2xl">RSE Learn</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border py-4 overflow-hidden bg-background/50 backdrop-blur-sm">
        <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex gap-12 items-center shrink-0">
              <span>Social Media</span><span className="text-primary">●</span>
              <span>Graphisme</span><span className="text-primary">●</span>
              <span>Email Marketing</span><span className="text-primary">●</span>
              <span>Montage Vidéo</span><span className="text-primary">●</span>
              <span>Stratégie Digitale</span><span className="text-primary">●</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
