const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Alphonse Yawo AMOULE — Tous droits réservés.</div>
        <div className="font-display">Designed with care in Lomé 🇹🇬</div>
      </div>
    </footer>
  );
};

export default Footer;
