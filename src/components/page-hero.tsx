import { ReactNode } from "react";

/**
 * Unified hero section for all internal pages.
 * Preserves the cinematic dark-luxury identity used across the site.
 *
 * Standard rhythm:
 * - Outer: relative overflow-hidden, soft radial gold accent
 * - Container: max-w-7xl, px-6 lg:px-10
 * - Vertical: py-32 md:py-44
 * - Eyebrow: text-[10px], tracking-[0.5em], gold, mb-8
 * - Title:   font-display, text-5xl md:text-8xl, leading-[0.95]
 * - Subtitle: mt-8, max-w-2xl, text-base md:text-lg
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top, hsl(var(--gold) / 0.15), transparent 60%)",
        }}
      />
      <div
        className={`relative max-w-7xl mx-auto px-6 lg:px-10 py-32 md:py-44 ${
          isCenter ? "text-center" : "text-left"
        }`}
      >
        {eyebrow && (
          <div className="text-gold uppercase tracking-[0.5em] text-[10px] mb-8">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-5xl md:text-8xl leading-[0.95]">
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-8 ${
              isCenter ? "mx-auto" : ""
            } max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

/**
 * Unified content section wrapper.
 * Standard rhythm: max-w-7xl, px-6 lg:px-10, py-24 md:py-32.
 */
export function PageSection({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}
