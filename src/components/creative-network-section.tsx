import { ArrowUpRight } from "lucide-react";

const DESIGNERS = [
  {
    name: "Alessandro Vieri",
    city: "Milan",
    discipline: "Luxury Ready-To-Wear",
    img: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Layla Al-Mansouri",
    city: "Dubai",
    discipline: "Contemporary Fashion",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Eren Demir",
    city: "Istanbul",
    discipline: "Avant-Garde Fashion",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Margaux Lefèvre",
    city: "Paris",
    discipline: "Creative Textile Design",
    img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Idris Hale",
    city: "London",
    discipline: "Streetwear",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Noor Al-Faisal",
    city: "Riyadh",
    discipline: "Accessories",
    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80&auto=format&fit=crop",
  },
];

export function CreativeNetworkSection() {
  return (
    <section className="relative py-32 border-t border-border/50 overflow-hidden">
      {/* atmospheric backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-gold opacity-30" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.18]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <radialGradient id="cn-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--gold))" stopOpacity="0.35" />
              <stop offset="100%" stopColor="hsl(var(--gold))" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="220" r="2" fill="hsl(var(--gold))" />
          <circle cx="500" cy="160" r="2" fill="hsl(var(--gold))" />
          <circle cx="820" cy="260" r="2" fill="hsl(var(--gold))" />
          <circle cx="1000" cy="500" r="2" fill="hsl(var(--gold))" />
          <circle cx="350" cy="600" r="2" fill="hsl(var(--gold))" />
          <circle cx="700" cy="640" r="2" fill="hsl(var(--gold))" />
          <g
            stroke="hsl(var(--gold))"
            strokeWidth="0.6"
            strokeOpacity="0.45"
            strokeDasharray="2 6"
            fill="none"
          >
            <path d="M200 220 L500 160 L820 260 L1000 500" />
            <path d="M200 220 L350 600 L700 640 L1000 500" />
            <path d="M500 160 L700 640" />
            <path d="M820 260 L350 600" />
          </g>
          <circle cx="600" cy="400" r="380" fill="url(#cn-glow)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* header */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-gold uppercase tracking-[0.4em] text-[10px]">
              <span className="h-px w-8 bg-gold" />
              The Creative Network
            </div>
            <h2 className="font-display text-4xl md:text-6xl mt-6 leading-[1.05] tracking-tight">
              A growing network of <br />
              <span className="text-gradient-gold italic">global creative talent.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed lg:pb-3">
            Quietly forming across cities — designers, ateliers and emerging voices shaping
            the next chapter of international fashion.
          </p>
        </div>

        {/* editorial cards */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {DESIGNERS.map((d, i) => (
            <article key={d.name} className="group relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-card/40">
                <img
                  src={d.img}
                  alt={`${d.name} — ${d.discipline}`}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <div className="absolute top-5 left-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-gold/90">
                  <span className="h-px w-5 bg-gold/70" />
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="size-4 text-gold" />
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[10px] uppercase tracking-[0.35em] text-foreground/70">
                  <span>{d.city}</span>
                  <span className="text-gold/80">In Conversation</span>
                </div>
              </div>

              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl leading-tight">{d.name}</h3>
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {d.discipline}
              </div>
              <div className="mt-4 h-px w-full bg-border/60 group-hover:bg-gold/60 transition-colors duration-700" />
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 flex flex-col items-center text-center">
          <div className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground">
            By Introduction · Limited Cohort
          </div>
          <a
            href="mailto:network@spacia.group?subject=Early%20Creative%20Network"
            className="group mt-6 inline-flex items-center gap-3 border-b border-gold/60 hover:border-gold pb-2 text-xs uppercase tracking-[0.4em] text-foreground hover:text-gold transition-colors"
          >
            Join The Early Creative Network
            <ArrowUpRight className="size-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
