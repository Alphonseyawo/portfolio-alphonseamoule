import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="container">
        <nav className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border border-border shadow-elevated" : "bg-background/40 backdrop-blur-sm border border-border/50"}`}>
          <a href="#home" className="flex items-center gap-2 font-display font-bold">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-border bg-secondary">
              <img src="/portrait-whatsapp.jpeg" alt="Alphonse Yawo AMOULE" className="w-full h-full object-cover" />
            </div>
            <span className="hidden sm:inline tracking-[0.2em] text-sm">PORTFOLIO</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="px-3 lg:px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">{item.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden sm:inline-flex text-sm px-4 sm:px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-glow transition-all">Travaillons ensemble</a>
            <button onClick={() => setOpen(!open)} className="md:hidden w-9 h-9 inline-flex items-center justify-center rounded-full border border-border" aria-label="Menu">{open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}</button>
          </div>
        </nav>
        {open && (
          <div className="md:hidden mt-2 rounded-2xl bg-background/95 backdrop-blur-xl border border-border p-3 space-y-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-secondary">{item.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block sm:hidden px-4 py-2.5 rounded-xl text-sm font-medium bg-primary text-primary-foreground text-center">Travaillons ensemble</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
