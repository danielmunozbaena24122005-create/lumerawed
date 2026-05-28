import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#sobre", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-primary/15 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" aria-label="Lumera Wed inicio">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-[0.25em] uppercase text-foreground/85 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="hidden md:inline-block text-xs tracking-[0.3em] uppercase border border-primary/60 text-primary px-5 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all"
        >
          Reservar
        </a>
        <button
          aria-label="Abrir menú"
          aria-expanded={open}
          className="md:hidden text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className="block w-7 h-px bg-primary" />
            <span className="block w-5 h-px bg-primary ml-auto" />
            <span className="block w-7 h-px bg-primary" />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-4 mx-6 border border-primary/20 bg-card/95 backdrop-blur-md py-6 px-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm tracking-[0.25em] uppercase text-foreground/90 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block text-center text-xs tracking-[0.3em] uppercase border border-primary text-primary px-5 py-3"
          >
            Reservar
          </a>
        </div>
      )}
    </header>
  );
}
