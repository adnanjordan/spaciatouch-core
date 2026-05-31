import { ArrowUpRight } from "lucide-react";

const DESIGNERS = [
  { name: "Alessandro Vieri", city: "Milan", discipline: "Tailoring" },
  { name: "Layla Al-Mansouri", city: "Dubai", discipline: "Couture" },
  { name: "Eren Demir", city: "Istanbul", discipline: "Avant-Garde" },
  { name: "Margaux Lefèvre", city: "Paris", discipline: "Textiles" },
  { name: "Idris Hale", city: "London", discipline: "Contemporary" },
  { name: "Noor Al-Faisal", city: "Riyadh", discipline: "Accessories" },
];

export function DesignerNetworkSection() {
  return (
    <section className="relative py-32 lg:py-40 border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 text-gold uppercase tracking-[0.4em] text-[10px]">
          <span className="h-px w-8 bg-gold" />
          The Designer Network
        </div>

        <div className="mt-8 grid lg:grid-cols-12 gap-10 items-end">
          <h2 className="lg:col-span-8 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
            A quiet community of designers,
            <span className="text-gradient-gold italic"> forming across cities.</span>
          </h2>
          <p className="lg:col-span-4 text-muted-foreground leading-relaxed max-w-md">
            An evolving constellation of voices — independent, considered, and
            globally curious.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40 border border-border/40">
          {DESIGNERS.map((d, i) => (
            <article
              key={d.name}
              className="group relative bg-background/80 p-8 md:p-10 min-h-[260px] flex flex-col justify-between transition-colors duration-500 hover:bg-card/60"
            >
              <div className="flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/70">
                  0{i + 1}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground/40 group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-500" />
              </div>

              <div className="mt-12">
                <div className="font-display text-2xl md:text-3xl leading-tight">
                  {d.name}
                </div>
                <div className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em]">
                  <span className="text-gold/80">{d.city}</span>
                  <span className="h-px w-6 bg-border" />
                  <span className="text-muted-foreground/70">{d.discipline}</span>
                </div>
              </div>

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center text-center">
          <p className="text-muted-foreground text-sm max-w-xl">
            By introduction only. New voices are welcomed slowly.
          </p>
          <a
            href="mailto:network@spacia.group"
            className="group mt-8 inline-flex items-center gap-3 border border-border hover:border-gold text-foreground/80 hover:text-gold px-8 py-4 rounded-sm text-xs uppercase tracking-[0.3em] transition-colors"
          >
            Join The Early Creative Network
            <ArrowUpRight className="size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
