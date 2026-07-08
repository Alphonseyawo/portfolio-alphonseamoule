import { Link } from "react-router-dom";
import { ArrowLeft, Download, FileText, Eye, Image as ImageIcon, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

import bonneRentree from "@/assets/realisations/bonne-rentree.jpg.asset.json";
import certificationIa from "@/assets/realisations/certification-ia.png.asset.json";
import commandez from "@/assets/realisations/commandez-maintenant.jpg.asset.json";
import rseLearn from "@/assets/realisations/rse-learn.png.asset.json";
import recrutement from "@/assets/realisations/recrutement.jpg.asset.json";
import acteurChangement from "@/assets/realisations/acteur-changement.jpg.asset.json";
import partenaires from "@/assets/realisations/partenaires.png.asset.json";

const articles = [
  { title: "ARTICLE SEO", description: "Article rédigé dans le cadre du projet, hébergé sur Google Docs.", url: "https://docs.google.com/document/d/1P58Zix8odyGanDr___cQ4pp7q1G-8ostBvlyMJLoVDc/edit?usp=sharing", embedUrl: "https://docs.google.com/document/d/1P58Zix8odyGanDr___cQ4pp7q1G-8ostBvlyMJLoVDc/preview", filename: "article-seo.pdf" },
  { title: "COMMUNICATION OFFICIELLE", description: "Article rédigé pendant le stage, hébergé sur Google Docs.", url: "https://docs.google.com/document/d/1R619oH8836QVvwgC2hqh97nAur6wptLjtMSdTayCp1Q/edit?usp=sharing", embedUrl: "https://docs.google.com/document/d/1R619oH8836QVvwgC2hqh97nAur6wptLjtMSdTayCp1Q/preview", filename: "communication-officielle.pdf" },
  { title: "ARTICLES SCI", description: "Article rédigé pendant le stage, hébergé sur Google Docs.", url: "https://docs.google.com/document/d/1Q4q0wVCH9kDchTSxB5TJt7VQ30ti2LMu6EOpqb9JL7c/edit?usp=sharing", embedUrl: "https://docs.google.com/document/d/1Q4q0wVCH9kDchTSxB5TJt7VQ30ti2LMu6EOpqb9JL7c/preview", filename: "articles-sci.pdf" },
];

const visuels = [
  { src: bonneRentree.url, title: "Bonne rentrée — Ecom Green Mobility" },
  { src: certificationIa.url, title: "Certification en IA — Campus SCI × ESCEN" },
  { src: commandez.url, title: "Commandez maintenant — Ecom" },
  { src: rseLearn.url, title: "RSE LEARN — Programme panafricain" },
  { src: recrutement.url, title: "Nous recrutons — Solve Consult" },
  { src: acteurChangement.url, title: "Acteur du changement — Programme LEARN" },
  { src: partenaires.url, title: "Partenaires — Programme LEARN" },
];

const carrousels = [
  { title: "Carrousel LEARN", description: "Carrousel visuel du programme LEARN.", url: "/carrousel-learn.pdf", previewImage: "/carrousel-learn-preview.jpg", filename: "CARROUSEL_LEARN.pdf" },
  { title: "Carrousel Pentecôte", description: "Carrousel visuel — campagne Pentecôte.", url: "/carrousel-pentecote.pdf", previewImage: "/carrousel-pentecote-preview.jpg", filename: "CARROUSEL_PENTECOTE.pdf" },
  { title: "Carrousel Indépendance du Togo", description: "Carrousel visuel — Indépendance du Togo.", url: "/carrousel-independance-togo.pdf", previewImage: "/carrousel-independance-togo-preview.jpg", filename: "CARROUSEL_INDEPENDANCE_TOGO.pdf" },
];

const ProjectRseLearn = () => {
  useEffect(() => { document.title = "Projet RSE Learn — Documents | Alphonse Yawo AMOULE"; }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="container py-12 sm:py-16 lg:py-24 max-w-6xl">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 sm:mb-12"><ArrowLeft className="w-4 h-4" />Retour aux projets</Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-16">
          <div className="text-sm uppercase tracking-[0.3em] text-primary mb-6">— Communication digitale & Marketing</div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">Groupe Ecom & <span className="text-gradient italic">Solve Consult International</span></h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">Articles, visuels et carrousels produits pendant ces deux stages en communication digitale et marketing.</p>
        </motion.div>

        {/* 1 — ARTICLES */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"><BookOpen className="w-5 h-5 text-primary" /></div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold">1. Articles</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((doc, i) => (
              <motion.div key={doc.url} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card-gradient border border-border rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500"><FileText className="w-6 h-6" /></div>
                <h3 className="font-display text-2xl font-semibold mb-3">{doc.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{doc.description}</p>
                <div className="flex flex-wrap gap-3">
                  <a href={doc.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"><Eye className="w-4 h-4" />Lire en ligne</a>
                  <a href={doc.url} download={doc.filename} className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors"><Download className="w-4 h-4" />Télécharger</a>
                </div>
                <div className="mt-8 rounded-2xl overflow-hidden border border-border bg-secondary/30">
                  <iframe src={doc.embedUrl} title={doc.title} className="w-full h-[480px]" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2 — VISUELS */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"><ImageIcon className="w-5 h-5 text-primary" /></div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold">2. Visuels</h2>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {visuels.map((v, i) => (
              <motion.div key={v.src} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group bg-card-gradient border border-border rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500">
                <div className="w-full flex items-center justify-center bg-secondary/30 p-3">
                  <img src={v.src} alt={v.title} loading="lazy" className="w-full h-auto max-h-[520px] object-contain rounded-2xl" />
                </div>
                <div className="px-5 py-4 border-t border-border">
                  <p className="text-sm text-muted-foreground truncate" title={v.title}>{v.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3 — CARROUSELS */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"><FileText className="w-5 h-5 text-primary" /></div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold">3. Carrousels</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {carrousels.map((c, i) => (
              <motion.div key={c.url} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card-gradient border border-border rounded-3xl p-6 hover:border-primary/40 transition-all duration-500 group flex flex-col">
                <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{c.description}</p>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="block rounded-2xl overflow-hidden border border-border bg-secondary/30 relative group/preview mb-5">
                  <img src={c.previewImage} alt={`Aperçu de ${c.title}`} className="w-full h-auto max-h-[420px] object-contain" />
                  <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium"><Eye className="w-4 h-4" />Ouvrir</span>
                  </div>
                </a>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"><Eye className="w-4 h-4" />Ouvrir</a>
                  <a href={c.url} download={c.filename} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors"><Download className="w-4 h-4" />Télécharger</a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectRseLearn;
