import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import videoAsset from "@/assets/montage-video.mp4.asset.json";

const ProjectMontageVideo = () => {
  const navigate = useNavigate();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.history.length > 1) navigate(-1);
    else navigate("/#projects");
  };

  return (
  <main className="min-h-screen py-24">
    <div className="container max-w-4xl">
      <a href="/#projects" onClick={handleBack} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
        <ArrowLeft className="w-4 h-4" /> Retour aux projets
      </a>


      <div className="text-xs uppercase tracking-widest text-primary mb-3">Création de contenu · Vidéo</div>
      <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">Montage vidéo</h1>
      <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
        Production de vidéos courtes optimisées pour les formats verticaux. Découpage, sous-titrage et habillage graphique.
      </p>

      <div className="rounded-3xl border border-border bg-card-gradient p-4 lg:p-6">
        <video
          src={videoAsset.url}
          controls
          playsInline
          preload="metadata"
          className="w-full max-h-[70vh] rounded-2xl bg-black"
        />
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={videoAsset.url} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
            Ouvrir dans un nouvel onglet
          </a>
          <a href={videoAsset.url} download className="text-sm px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
            Télécharger la vidéo
          </a>
        </div>
      </div>
    </div>
  </main>
  );
};

export default ProjectMontageVideo;
