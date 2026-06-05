import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Projects from "@/components/portfolio/Projects";
import FAQ from "@/components/portfolio/FAQ";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import Chatbot from "@/components/portfolio/Chatbot";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Alphonse Yawo AMOULE — Marketing Digital & Communication";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      "Portfolio de Alphonse Yawo AMOULE — spécialiste marketing digital, création de contenu, graphisme et email marketing à Lomé."
    );
    document.head.appendChild(meta);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
};

export default Index;
