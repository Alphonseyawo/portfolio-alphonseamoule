import { Link } from "react-router-dom";
import { ArrowLeft, Download, FileText, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import fiche from "@/assets/rse/fiche-strategique.pdf.asset.json";
import accord from "@/assets/rse/accord-collaboration.pdf.asset.json";

const documents = [
  {
    title: "Fiche stratégique — Expansion Learn",
    description: "Document stratégique détaillant le plan d'expansion du projet RSE Learn.",
    url: fiche.url,
    filename: "fiche-strategique-expansion-learn.pdf",
  },
  {
    title: "Accord de collaboration volontaire",
    description: "Cadre de la collaboration volontaire mise en place pour le projet.",
    url: accord.url,
    filename: "accord-collaboration-volontaire.pdf",
  },
];

const ProjectRseLearn = () => {
  useEffect(() => {
    document.title = "Projet RSE Learn — Documents | Alphonse Yawo AMOULE";
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="container py-16 lg:py-24 max-w-5xl">
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
            — Communication digitale · RSE
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6">
            RSE Learn — <span className="text-gradient italic">Groupe Ecom</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Consultez ou téléchargez les documents officiels liés au projet RSE Learn.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {documents.map((doc, i) => (
            <motion.div
              key={doc.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card-gradient border border-border rounded-3xl p-8 hover:border-primary/40 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="font-display text-2xl font-semibold mb-3">{doc.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{doc.description}</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Eye className="w-4 h-4" />
                  Lire en ligne
                </a>
                <a
                  href={doc.url}
                  download={doc.filename}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Télécharger
                </a>
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden border border-border bg-secondary/30">
                <iframe
                  src={`${doc.url}#toolbar=0&view=FitH`}
                  title={doc.title}
                  className="w-full h-[480px]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectRseLearn;
