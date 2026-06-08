import { useEffect } from "react";

/**
 * Applies a global fade-in + scale-up reveal animation on scroll
 * to common text/media elements within <main>.
 */
export const useReveal = () => {
  useEffect(() => {
    const selector = [
      "main h1",
      "main h2",
      "main h3",
      "main h4",
      "main p",
      "main img",
      "main li",
      "main blockquote",
      "main [data-reveal]",
    ].join(",");

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector)
    ).filter((el) => !el.closest("[data-no-reveal]"));

    elements.forEach((el) => el.classList.add("lv-reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lv-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
};
