import { Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-primary/15 bg-background pt-20 pb-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-10">
        <Logo showTagline />

        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
            className="h-11 w-11 inline-flex items-center justify-center border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.4} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook"
            className="h-11 w-11 inline-flex items-center justify-center border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Facebook className="h-4 w-4" strokeWidth={1.4} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="TikTok"
            className="h-11 w-11 inline-flex items-center justify-center border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <TikTokIcon />
          </a>
        </div>

        <a
          href="tel:+34637749865"
          className="font-serif text-2xl text-primary hover:text-accent transition-colors tracking-wider"
        >
          637 749 865
        </a>

        <div className="w-full max-w-md flex items-center gap-4">
          <span className="h-px flex-1 bg-primary/20" />
          <span className="text-[0.6rem] tracking-[0.4em] uppercase text-foreground/50">
            Lumera Studio
          </span>
          <span className="h-px flex-1 bg-primary/20" />
        </div>

        <p className="text-xs tracking-wider text-foreground/55 text-center">
          © {new Date().getFullYear()} Lumera – Fotografía y Vídeo para Bodas,
          Bautizos y Comuniones
        </p>
      </div>
    </footer>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.83a8.16 8.16 0 0 0 4.77 1.52V7.9a4.85 4.85 0 0 1-1.84-1.21Z" />
    </svg>
  );
}
