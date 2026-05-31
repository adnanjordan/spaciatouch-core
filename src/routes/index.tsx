import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import heroImg from "@/assets/hero-global.jpg";
import designersImg from "@/assets/designers.jpg";
import retailImg from "@/assets/retail-reimagined.jpg";
import mapImg from "@/assets/global-map.jpg";
import { ArrowUpRight, Globe, Compass, Layers, Truck, Sparkles } from "lucide-react";
import { GlobalNetworkSection } from "@/components/global-network-section";
import { CreativeNetworkSection } from "@/components/creative-network-section";
import { DesignerNetworkSection } from "@/components/designer-network-section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spacia Group — The Future of Retail Experiences" },
      {
        name: "description",
        content:
          "A Dubai-based global platform connecting designers, brands and curated retail destinations into one modern ecosystem.",
      },
      { property: "og:title", content: "Spacia Group — The Future of Retail Experiences" },
      {
        property: "og:description",
        content:
          "Where global designers meet modern retail. A new ecosystem for fashion, commerce and curated spaces.",
      },
    ],
  }),
  component: Landing,
});

const cities = ["Dubai", "Amman", "Milan", "Paris", "Istanbul", "Riyadh", "London"];

function Landing() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <SiteNav />

      {/* HERO */}
      <section className="relative pt-16 min-h-[100svh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Spacia Group flagship retail destination"
            width={1920}
            height={1280}
            className="w-full h-full object-cover opacity-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-background" />
          <div className="absolute inset-0 bg-radial-gold opacity-60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20 pb-24 lg:pt-32 lg:pb-40">
          <div className="max-w-4xl animate-fade-up">
            <div className="flex items-center gap-3 text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-10">
              <span className="h-px w-10 bg-gold" />
              SPACIA GROUP • DUBAI-BASED • FUTURE RETAIL DESTINATIONS
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight">
              The Future of <br />
              <span className="text-gradient-gold italic">Retail Experiences</span>
              <br /> Begins Here.
            </h1>

            <p className="mt-12 md:mt-14 w-full ml-0 text-base md:text-lg text-white/75 leading-[1.85]">
              Not every brand that deserves success gets the visibility it deserves.
              <br />
              SPACIA connects designers, brands, and strategic partners with premium retail destinations
              and expansion opportunities across the most dynamic and high-growth markets.
              <br />
              From a single presence to a multi-city expansion network, we empower ambitious brands to
              reach wider audiences, stronger markets, and greater opportunities for growth.
            </p>

            <div className="mt-12 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden max-w-5xl">
              {[
                "DUBAI-BASED RETAIL VISION",
                "THE NEXT SPACIA DESTINATIONS",
                "CURATED RETAIL DESTINATIONS",
                "DESIGNERS • BRANDS • PARTNERS",
              ].map((item) => (
                <div key={item} className="bg-background/80 px-4 py-4 text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-14 md:mt-16 flex flex-wrap items-center gap-4">
              <Link
                to="/collective"
                className="group inline-flex items-center gap-3 bg-gradient-gold text-ink px-6 py-4 rounded-sm text-xs uppercase tracking-[0.28em] font-medium shadow-gold hover:opacity-90 transition"
              >
                FOR DESIGNERS
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                to="/vendors"
                className="inline-flex items-center gap-3 border border-border text-foreground/80 hover:text-gold hover:border-gold px-6 py-4 rounded-sm text-xs uppercase tracking-[0.28em] transition"
              >
                FOR BRANDS
              </Link>
              <Link
                to="/booking"
                className="inline-flex items-center gap-3 border border-border text-foreground/80 hover:text-gold hover:border-gold px-6 py-4 rounded-sm text-xs uppercase tracking-[0.28em] transition"
              >
                FOR PARTNERS
              </Link>
            </div>
          </div>

          {/* City marquee */}
          <div className="absolute bottom-10 left-0 right-0 px-6 lg:px-10">
            <div className="flex items-center gap-8 text-[10px] md:text-xs uppercase tracking-[0.4em] text-muted-foreground/70 overflow-hidden">
              <span className="text-gold">Operating Horizons</span>
              <span className="h-px flex-1 bg-border" />
              {cities.map((c) => (
                <span key={c} className="hidden md:inline">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="-mt-6 md:-mt-10">
        <GlobalNetworkSection />
      </div>

      <div className="-mt-8 md:-mt-12">
        <DesignerNetworkSection />
      </div>

      <div className="-mt-8 md:-mt-12">
        <CreativeNetworkSection />
      </div>

      {/* VISION & PHILOSOPHY */}
      <div className="-mt-8 md:-mt-12">
      <Section eyebrow="01 — Vision & Philosophy" title="A new operating language for global retail.">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <p className="lg:col-span-7 font-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
            We build a premium retail operating model where
            <span className="text-gold"> capital, curation and commerce </span>
            work in one coordinated system across markets.
          </p>
          <div className="lg:col-span-5 lg:pt-6 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Spacia structures retail destinations as programmable infrastructure: curated brand
              mix, design-led spaces, operational logistics and measurable commercial throughput.
            </p>
            <p className="text-foreground/80">
              Dubai is our investment and strategic base; Amman is the first execution market in
              a phased regional rollout.
            </p>
          </div>
        </div>
      </Section>
      </div>

      {/* GLOBAL DESIGNER NETWORK */}
      <section className="relative py-20 md:py-24 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
            <img
              src={designersImg}
              alt="Designer atelier portrait"
              loading="lazy"
              width={1280}
              height={1600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div>
            <Eyebrow>02 — Global Designer Network</Eyebrow>
            <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
              Where global designers meet <span className="text-gradient-gold italic">modern retail.</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-lg">
              From independent ateliers to established houses, Spacia introduces designers to the cities,
              audiences and infrastructures that move their work forward — without dilution, without compromise.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-8 text-sm">
              {[
                { k: "Houses", v: "Curated" },
                { k: "Cities", v: "Selective" },
                { k: "Audience", v: "Discerning" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="text-gold font-display text-3xl">{s.v}</div>
                  <div className="uppercase tracking-[0.3em] text-[10px] text-muted-foreground mt-2">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RETAIL REIMAGINED */}
      <section className="relative py-20 md:py-24 border-t border-border/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>03 — Retail Reimagined</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-3xl leading-tight">
            Spaces that behave more like
            <span className="text-gradient-gold italic"> living editorials</span> than stores.
          </h2>
        </div>

        <div className="relative mt-16 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-sm">
            <img
              src={retailImg}
              alt="Reimagined luxury retail interior"
              loading="lazy"
              width={1600}
              height={1200}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent" />
          </div>
          <div className="lg:col-span-5 space-y-6">
            {[
              { icon: Layers, t: "Curated Architecture", d: "Modular, intelligent environments designed around the brands they host." },
              { icon: Sparkles, t: "Editorial Merchandising", d: "Every surface tells a story; every story is measured." },
              { icon: Compass, t: "Place as Platform", d: "Each destination becomes infrastructure for the next." },
            ].map((f) => (
              <div key={f.t} className="border border-border/60 rounded-sm p-6 hover:border-gold/50 transition group bg-card/40 backdrop-blur">
                <f.icon className="size-5 text-gold mb-4" />
                <div className="font-display text-2xl">{f.t}</div>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUBAI BASED · GLOBAL EXPANSION */}
      <section className="relative py-20 md:py-24 border-t border-border/50 overflow-hidden">
        <img
          src={mapImg}
          alt="Spacia global presence map"
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>04 — Dubai-Based · Global Horizon</Eyebrow>
          <div className="grid lg:grid-cols-2 gap-16 mt-6 items-end">
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              Headquartered in Dubai. <br />
              <span className="text-gradient-gold italic">Composed across continents.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg lg:justify-self-end">
              From our Dubai base, Spacia is plotting a quiet expansion across the cities that
              define modern luxury — beginning with Amman, then onward through the Gulf, the
              Levant, the Mediterranean and Europe.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
            {[
              { c: "Dubai", s: "Headquarters" },
              { c: "Amman", s: "First Destination" },
              { c: "Riyadh", s: "Horizon" },
              { c: "Istanbul", s: "Horizon" },
              { c: "Milan", s: "Horizon" },
              { c: "Paris", s: "Horizon" },
              { c: "London", s: "Horizon" },
              { c: "Doha", s: "Horizon" },
            ].map((x) => (
              <div key={x.c} className="bg-background/80 p-6 backdrop-blur">
                <div className="font-display text-2xl">{x.c}</div>
                <div className="uppercase tracking-[0.3em] text-[10px] text-gold/70 mt-1">{x.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURATED FASHION EXPERIENCES + LOGISTICS  (3 col) */}
      <Section id="ecosystem" eyebrow="05 — The Ecosystem" title="One platform, four aligned stakeholders.">
        <p className="max-w-4xl text-muted-foreground leading-relaxed mb-10">
          Spacia aligns investor objectives, designer growth, vendor and brand performance, and
          destination-level asset value through a single operating framework.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
          {[
            {
              icon: Sparkles,
              t: "For Investors",
              d: "Access to a phased Dubai-to-Jordan retail model with disciplined expansion strategy.",
            },
            {
              icon: Globe,
              t: "For Designers",
              d: "Curated market entry, premium placement and cross-city visibility without brand dilution.",
            },
            {
              icon: Layers,
              t: "For Vendors / Brands",
              d: "Flexible retail-space participation, merchandising support and destination-ready operations.",
            },
            {
              icon: Truck,
              t: "For Destinations",
              d: "A platform layer that upgrades occupancy quality, audience relevance and commercial resilience.",
            },
          ].map((p) => (
            <div key={p.t} className="bg-card/30 p-8 backdrop-blur hover:bg-card/60 transition">
              <p.icon className="size-5 text-gold" />
              <div className="font-display text-2xl mt-6">{p.t}</div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FUTURE DESTINATIONS — quiet roadmap */}
      <div className="-mt-4 md:-mt-6">
      <Section id="destinations" eyebrow="06 — Future Retail Destinations" title="A roadmap composed slowly, deliberately.">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { phase: "Phase I", title: "The First Destination", body: "An invitation-only flagship environment — the prototype of everything that follows." },
            { phase: "Phase II", title: "Regional Composition", body: "Selected expansions across the Gulf and Levant, each tuned to its own city." },
            { phase: "Phase III", title: "Global Editions", body: "Curated entries into the European fashion capitals as the network matures." },
          ].map((p, i) => (
            <div key={p.phase} className="border-t border-gold/40 pt-6">
              <div className="text-gold uppercase tracking-[0.3em] text-[10px]">{p.phase}</div>
              <div className="font-display text-3xl mt-3">{p.title}</div>
              <p className="text-muted-foreground mt-4 leading-relaxed">{p.body}</p>
              <div className="mt-6 text-xs text-muted-foreground/60">0{i + 1} / 03</div>
            </div>
          ))}
        </div>
      </Section>
      </div>

      {/* JOIN THE NETWORK */}
      <div className="-mt-4 md:-mt-6">
      <section className="relative py-20 md:py-24 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <Eyebrow>07 — Join The Network</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
            For designers, brands and <span className="text-gradient-gold italic">visionary partners.</span>
          </h2>
          <p className="text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed">
            Spacia operates by introduction. If your work belongs in what comes next, we would like to meet
            you — quietly, and without ceremony.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <a
              href="mailto:network@spacia.group"
              className="inline-flex items-center gap-3 bg-gradient-gold text-ink px-8 py-4 rounded-sm text-xs uppercase tracking-[0.3em] shadow-gold"
            >
              Request Introduction
              <ArrowUpRight className="size-4" />
            </a>
            <Link
              to="/booking"
              className="inline-flex items-center gap-3 border border-border hover:border-gold hover:text-gold px-8 py-4 rounded-sm text-xs uppercase tracking-[0.3em] transition"
            >
              Explore Spaces
            </Link>
          </div>
        </div>
      </section>
      </div>

      {/* COMING SOON */}
      <section className="relative py-28 md:py-32 border-t border-border/50 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-50" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <div className="text-gold uppercase tracking-[0.5em] text-[10px]">Coming Soon</div>
          <h2 className="font-display text-5xl md:text-8xl mt-6 leading-[0.95]">
            Something <span className="italic text-gradient-gold">extraordinary</span><br /> is being composed.
          </h2>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto">
            The first chapter of Spacia opens shortly. Until then — silence is part of the design.
          </p>
        </div>
      </section>

      <div className="-mt-6 md:-mt-8 [&_footer]:!mt-20">
        <SiteFooter />
      </div>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-gold uppercase tracking-[0.4em] text-[10px]">
      <span className="h-px w-8 bg-gold" />
      {children}
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-20 md:py-24 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        {title && (
          <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-3xl leading-tight">{title}</h2>
        )}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
