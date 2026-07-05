import { Link } from "react-router-dom";
import { ArrowLeft, Download, FileText, Eye, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import carrouselPreview from "@/assets/carrousel-learn-preview.jpg.asset.json";

const carrouselPdfUrl = "/carrousel-learn.pdf";

const documents = [
  { title: "ARTICLE SEO", description: "Article rédigé dans le cadre du projet, hébergé sur Google Docs.", url: "https://docs.google.com/document/d/1P58Zix8odyGanDr___cQ4pp7q1G-8ostBvlyMJLoVDc/edit?usp=sharing", embedUrl: "https://docs.google.com/document/d/1P58Zix8odyGanDr___cQ4pp7q1G-8ostBvlyMJLoVDc/preview", filename: "article-seo.pdf", isExternal: true },
  { title: "COMMUNICATION OFFICIELLE", description: "Article rédigé pendant le stage, hébergé sur Google Docs.", url: "https://docs.google.com/document/d/1R619oH8836QVvwgC2hqh97nAur6wptLjtMSdTayCp1Q/edit?usp=sharing", embedUrl: "https://docs.google.com/document/d/1R619oH8836QVvwgC2hqh97nAur6wptLjtMSdTayCp1Q/preview", filename: "communication-officielle.pdf", isExternal: true },
  { title: "ARTICLES SCI", description: "Article rédigé pendant le stage, hébergé sur Google Docs.", url: "https://docs.google.com/document/d/1Q4q0wVCH9kDchTSxB5TJt7VQ30ti2LMu6EOpqb9JL7c/edit?usp=sharing", embedUrl: "https://docs.google.com/document/d/1Q4q0wVCH9kDchTSxB5TJt7VQ30ti2LMu6EOpqb9JL7c/preview", filename: "articles-sci.pdf", isExternal: true },
  { title: "Carrousel LEARN", description: "Carrousel visuel du programme LEARN au format PDF.", url: carrouselPdfUrl, embedUrl: carrouselPdfUrl, previewImage: carrouselPreview.url, filename: "CARROUSEL_LEARN_PDF.pdf", isExternal: false },
];

const canvaLinks = [
  { label: "Bienvenue — Programme LEARN", url: "https://canva.link/50byq1o8vyx90j6" },
  { label: "Conférence LEARN — Dr Franck Kossi SOMALI", url: "https://canva.link/l81ng6mnlutp4ap" },
  { label: "Speaker — AMEYOU Comlan Joél", url: "https://canva.link/zz58bd3jnohapma" },
  { label: "Speaker — MOUKAILA Moubarak", url: "https://canva.link/govb2zsuav8lomo" },
  { label: "Partenaires — Programme LEARN", url: "https://canva.link/4c5y2d3ptv03tbz" },
  { label: "Ecom — Des courses en toute sécurité", url: "https://canva.link/cqy6kw35kz0cal2" },
  { label: "Alpha Marketing — Nos offres", url: "https://canva.link/4c5y2d3ptv03tbz" },
];

const ProjectRseLearn = () => {
  useEffect(() => { document.title = "Projet RSE Learn — Documents | Alphonse Yawo AMOULE"; }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="container py-16 lg:py-24 max-w-5xl">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"><ArrowLeft className="w-4 h-4" />Retour aux projets</Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
          <div className="text-sm uppercase tracking-[0.3em] text-primary mb-6">— Communication digitale & Marketing</div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">Groupe Ecom & <span className="text-gradient italic">Solve Consult International</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">Documents officiels du projet RSE Learn et liens vers les réalisations visuelles produites pendant ces deux stages.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {documents.map((doc, i) => (
            <motion.div key={doc.url} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card-gradient border border-border rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500"><FileText className="w-6 h-6" /></div>
              <h2 className="font-display text-2xl font-semibold mb-3">{doc.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{doc.description}</p>
              <div className="flex flex-wrap gap-3">
                <a href={doc.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"><Eye className="w-4 h-4" />Lire en ligne</a>
                <a href={doc.url} download={doc.filename} className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors"><Download className="w-4 h-4" />Télécharger</a>
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden border border-border bg-secondary/30">
                <iframe src={doc.isExternal ? doc.embedUrl : `${doc.embedUrl}#toolbar=0&view=FitH`} title={doc.title} className="w-full h-[480px]" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="mt-20">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-3">Réalisations visuelles</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">Liens Canva des visuels et affiches conçus pendant ces missions.</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {canvaLinks.map((link) => (
              <li key={link.label + link.url}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border border-border bg-card-gradient hover:border-primary/40 transition-all">
                  <div className="min-w-0"><div className="font-medium text-sm truncate">{link.label}</div></div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectRseLearn;
