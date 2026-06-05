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
          <a
            href="https://tiktok.com/@lumera.wed"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="TikTok"
            className="h-11 w-11 inline-flex items-center justify-center border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.84a8.16 8.16 0 0 0 4.77 1.52V6.91a4.85 4.85 0 0 1-1.84-.22Z" />
            </svg>
          </a>
          <a
            href="https://wa.me/qr/3HETXCJNSUF4D1"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="WhatsApp"
            className="h-11 w-11 inline-flex items-center justify-center border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
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
