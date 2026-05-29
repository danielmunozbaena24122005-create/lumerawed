import { Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-primary/15 bg-background pt-20 pb-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-10">
        <Logo showTagline />

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/lumera.wed?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
            className="h-11 w-11 inline-flex items-center justify-center border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.4} />
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
            Lumera Wed
          </span>
          <span className="h-px flex-1 bg-primary/20" />
        </div>

        <p className="text-xs tracking-wider text-foreground/55 text-center">
          © {new Date().getFullYear()} Lumera Wed – Fotografía y Vídeo para Bodas
        </p>
      </div>
    </footer>
  );
}
