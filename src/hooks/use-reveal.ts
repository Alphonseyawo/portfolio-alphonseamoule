import { useEffect } from "react";

/** Premium reveal: animations replay every time element enters viewport (scroll up or down) */
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

    elements.forEach((el) => {
      el.classList.add("lv-reveal");
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter((c) =>
          (c as HTMLElement).classList?.contains("lv-reveal")
        );
        const idx = siblings.indexOf(el);
        if (idx >= 0) {
          el.style.transitionDelay = `${Math.min(idx * 80, 400)}ms`;
        }
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lv-in");
          } else {
            entry.target.classList.remove("lv-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
};
