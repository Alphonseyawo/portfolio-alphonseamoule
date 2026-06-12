import { useEffect, useState } from "react";

const Loader = () => {
  const [mounted, setMounted] = useState(true);
  useEffect(() => { const t = setTimeout(() => setMounted(false), 2400); return () => clearTimeout(t); }, []);
  if (!mounted) return null;
  return (
    <div className="lv-loader" aria-hidden="true">
      <div className="flex flex-col items-center gap-4">
        <div className="font-display text-2xl tracking-[0.4em] text-foreground/80">PORTFOLIO</div>
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Alphonse Yawo AMOULE</div>
      </div>
    </div>
  );
};

export default Loader;
