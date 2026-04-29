import { useState, useEffect } from "react";

const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
      <div className="container">
        <nav className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border border-border shadow-soft" : "bg-transparent"
        }`}>
          <a href="#home" className="flex items-center gap-2 font-display font-bold">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm">A</div>
            <span className="hidden sm:inline">Alphonse.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="text-sm px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all"
          >
            Travaillons ensemble
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
