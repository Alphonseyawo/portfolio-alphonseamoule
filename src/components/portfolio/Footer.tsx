import { Mail, MapPin, Phone, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-card-gradient">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="inline-flex items-center gap-2 font-display font-bold text-2xl"><span className="tracking-[0.25em]">PORTFOLIO</span></a>
            <p className="text-muted-foreground max-w-md leading-relaxed">Alphonse Yawo AMOULE — Marketing digital, création de contenu et stratégie de communication. Transformons vos idées en résultats.</p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.instagram.com/alphonseamoule" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="https://www.linkedin.com/in/alphonse-amoule-2a472534b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-muted-foreground">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projets</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-muted-foreground">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>Lomé, Togo</span></li>
              <li className="flex items-start gap-3"><Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" /><a href="mailto:amoulealphonse38@gmail.com" className="hover:text-primary transition-colors break-all">amoulealphonse38@gmail.com</a></li>
              <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>Disponible sur demande</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {year} Alphonse Yawo AMOULE — Tous droits réservés.</div>
          <div className="flex items-center gap-4">
            <a href="#home" aria-label="Retour en haut" className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"><ArrowUp className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
