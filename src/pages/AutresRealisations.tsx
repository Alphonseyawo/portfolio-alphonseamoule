import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import drSomali from "@/assets/realisations/dr-somali.png.asset.json";
import joelAmeyou from "@/assets/realisations/joel-ameyou.png.asset.json";
import moukaila from "@/assets/realisations/moukaila.png.asset.json";
import bienvenue from "@/assets/realisations/bienvenue-learn.png.asset.json";
import alpha from "@/assets/realisations/alpha-marketing.jpg.asset.json";
import partenaires from "@/assets/realisations/partenaires-learn.png.asset.json";
import commande from "@/assets/realisations/commande-ecom.jpg.asset.json";
import carrousel from "@/assets/realisations/carrousel-learn.jpg.asset.json";
import carrouselPdf from "@/assets/rse/carrousel-learn.pdf.asset.json";

const visuals = [
  { src: bienvenue.url, title: "Bienvenue — Programme LEARN", canva: "https://canva.link/50byq1o8vyx90j6" },
  { src: drSomali.url, title: "Conférence LEARN — Dr Franck Kossi SOMALI", canva: "https://canva.link/l81ng6mnlutp4ap" },
  { src: joelAmeyou.url, title: "Speaker — AMEYOU Comlan Joél", canva: "https://canva.link/zz58bd3jnohapma" },
  { src: moukaila.url, title: "Speaker — MOUKAILA Moubarak", canva: "https://canva.link/govb2zsuav8lomo" },
  { src: partenaires.url, title: "Partenaires — Programme LEARN", canva: "https://canva.link/4c5y2d3ptv03tbz" },
  { src: commande.url, title: "Ecom — Des courses en toute sécurité", canva: "https://canva.link/cqy6kw35kz0cal2" },
  { src: alpha.url, title: "Alpha Marketing — Nos offres", canva: "https://canva.link/4c5y2d3ptv03tbz" },
  { src: carrousel.url, title: "Carrousel LEARN", canva: carrouselPdf.url },
];

const AutresRealisations = () => {
  useEffect(() => {
    document.title = "Autres réalisations — Visuels | Alphonse Yawo AMOULE";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="container py-16 lg:py-24 max-w-6xl">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux projets
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-primary mb-6">
            — Design graphique · Réseaux sociaux
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Autres <span className="text-gradient italic">réalisations</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Une sélection de visuels conçus pour des projets, conférences et campagnes — affiches, posts sociaux et supports promotionnels.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visuals.map((v, i) => (
            <motion.a
              key={v.src}
              href={v.canva}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group block bg-card-gradient border border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden bg-secondary/30">
                <img
                  src={v.src}
                  alt={v.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-sm font-semibold leading-tight">{v.title}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AutresRealisations;
