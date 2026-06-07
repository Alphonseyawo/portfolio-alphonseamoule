import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Quels services proposez-vous ?",
    a: "J'accompagne marques, indépendants et entreprises sur la communication digitale et le marketing : création de contenus (carrousels, posts, vidéos), community management, email marketing, stratégies social media (TikTok, Instagram, Facebook) et identité visuelle.",
  },
  {
    q: "Travaillez-vous à distance ou uniquement à Lomé ?",
    a: "Les deux. Je suis basé à Lomé (Togo) et je collabore avec des clients sur place comme à distance — partout en Afrique et à l'international.",
  },
  {
    q: "Combien coûte une prestation ?",
    a: "Chaque projet est unique : le tarif dépend du périmètre, des livrables et de la durée. Envoyez-moi un message via le formulaire de contact avec votre besoin, je vous reviens avec une proposition adaptée.",
  },
  {
    q: "Quels outils utilisez-vous ?",
    a: "Canva, CapCut, Photoshop, Brevo, HubSpot, Meta Business Suite, Vn, Google My Business — entre autres. Je m'adapte aux outils utilisés par mon client.",
  },
  {
    q: "Quel est votre délai de réponse ?",
    a: "Je réponds à la plupart des messages en moins de 24h ouvrées. Pour une question rapide, le chatbot en bas à droite peut aussi vous renseigner instantanément.",
  },
  {
    q: "Pouvez-vous gérer un compte de A à Z ?",
    a: "Oui — de la stratégie à la création de contenus, en passant par la publication, le community management et l'analyse des performances.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="faq" className="py-20 sm:py-32 relative">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-primary mb-6">— FAQ</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            Questions <span className="text-gradient italic">fréquentes</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Tout ce que vous devez savoir avant de démarrer une collaboration.
          </p>
        </motion.div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="w-full flex items-center justify-between gap-4 bg-card-gradient border border-border rounded-2xl px-6 py-5 hover:border-primary/40 transition-colors"
        >
          <span className="flex items-center gap-3 font-display text-base sm:text-lg font-semibold text-left">
            <HelpCircle className="w-5 h-5 text-primary shrink-0" />
            Voir toutes les questions fréquentes
          </span>
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <Accordion type="single" collapsible className="space-y-3 mt-4">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={faq.q}
                    value={`item-${i}`}
                    className="bg-card-gradient border border-border rounded-2xl px-5 sm:px-6 data-[state=open]:border-primary/40 transition-colors"
                  >
                    <AccordionTrigger className="font-display text-base sm:text-lg font-semibold text-left hover:no-underline py-5">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FAQ;
