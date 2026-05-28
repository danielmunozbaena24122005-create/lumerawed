interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className = "", showTagline = false }: LogoProps) {
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <span
        className="font-serif text-primary leading-none tracking-[0.35em] text-2xl md:text-3xl"
        style={{ fontVariant: "small-caps" }}
      >
        Lumera Wed
      </span>
      {showTagline && (
        <span className="mt-2 text-[0.6rem] tracking-[0.4em] uppercase text-accent/80">
          Photography · Film
        </span>
      )}
    </div>
  );
}
