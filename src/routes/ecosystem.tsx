import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import {
  Compass,
  Globe,
  Layers,
  Megaphone,
  Monitor,
  Package,
  Sparkles,
  Store,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "The SPACIA Ecosystem — Spacia Group" },
      {
        name: "description",
        content:
          "SPACIA is a smart retail expansion ecosystem for designers, brands, and companies — intelligent composition, operational freedom, and growth without diluting identity.",
      },
      { property: "og:title", content: "The SPACIA Ecosystem — SPACIA" },
      {
        property: "og:description",
        content:
          "Building smarter paths to growth through curated retail composition, connected channels, and premium brand elevation.",
      },
    ],
  }),
  component: EcosystemPage,
});

function EcosystemPage() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <SiteNav />

      {/* SECTION 01 — Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>The Ecosystem</Eyebrow>
          <h1 className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl">
            The SPACIA <span className="text-gradient-gold italic">Ecosystem</span>
          </h1>
          <p className="mt-6 font-display text-2xl md:text-3xl text-foreground/90 tracking-tight">
            Building Smarter Paths to Growth
          </p>
          <p className="mt-10 max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">
            SPACIA is a smart retail expansion ecosystem designed for designers, brands, and
            companies who deserve a premium presence in the world&apos;s most dynamic markets — without
            taking on the full weight of traditional retail expansion alone. We compose intelligent
            pathways to visibility, relevance, and growth through curated destinations, connected
            operations, and environments where exceptional work can be discovered and elevated.
          </p>
        </div>
      </section>

      {/* SECTION 02 — Why SPACIA Exists */}
      <EditorialSection eyebrow="01 — Why SPACIA Exists" title="When talent outpaces infrastructure.">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              The worlds of fashion, lifestyle, and consumer brands are evolving faster than
              traditional retail infrastructure can support. New voices emerge constantly —
              exceptional products, distinctive aesthetics, and companies with genuine ambition —
              yet many remain under-visible in markets that reward presence as much as quality.
            </p>
            <p>
              Expansion has become complex, expensive, and unpredictable. Opening a store demands
              capital, operational depth, and long-term commitment before a brand has tested whether
              a market truly responds to its work. Pop-ups and concessions offer flexibility, but
              rarely provide the strategic composition, commercial intelligence, or sustained
              visibility required for meaningful growth.
            </p>
            <p>
              At the same time, premium retail environments are searching for curated relevance —
              brands that strengthen the destination, complement existing offerings, and attract the
              right audience. Random placement is no longer enough. The future belongs to intelligent
              retail composition: environments where every presence is deliberate, compatible, and
              commercially coherent.
            </p>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="font-display text-3xl md:text-4xl leading-[1.15] tracking-tight text-foreground/90">
              That is why{" "}
              <span className="text-gradient-gold italic">SPACIA was created.</span>
            </p>
          </div>
        </div>
      </EditorialSection>

      {/* SECTION 03 — Intelligent Compositions */}
      <section className="relative py-20 md:py-28 border-t border-border/50 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>02 — Intelligent Compositions</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-4xl leading-tight">
            Intelligent compositions,{" "}
            <span className="text-gradient-gold italic">not random placement.</span>
          </h2>
          <p className="mt-8 max-w-3xl text-muted-foreground leading-relaxed text-base md:text-lg">
            SPACIA does not simply allocate space. We compose retail environments where every
            brand participates by design — aligned with the destination, the audience, and the
            commercial story of the whole.
          </p>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
            {[
              {
                icon: Compass,
                t: "Curated Alignment",
                d: "Every presence is selected to belong — aesthetically, commercially, and culturally within its destination.",
              },
              {
                icon: Layers,
                t: "Commercial Compatibility",
                d: "Brands are placed where they strengthen performance, not compete for the wrong customer or price point.",
              },
              {
                icon: Sparkles,
                t: "Product Synergy",
                d: "Collections and categories are composed so each brand amplifies the others — creating a coherent luxury narrative.",
              },
              {
                icon: Users,
                t: "Customer Behavior",
                d: "Placement reflects how audiences move, browse, and decide — turning footfall into meaningful discovery.",
              },
              {
                icon: Store,
                t: "Complementary Categories",
                d: "Fashion, lifestyle, and adjacent disciplines are balanced to deepen the experience and extend dwell time.",
              },
              {
                icon: Globe,
                t: "Market Intelligence",
                d: "Composition adapts to local appetite, seasonality, and growth potential — so expansion remains deliberate.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="bg-background/90 p-8 md:p-10 backdrop-blur hover:bg-card/40 transition-colors duration-500"
              >
                <item.icon className="size-5 text-gold mb-6" />
                <div className="font-display text-2xl leading-tight">{item.t}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <p className="mt-14 max-w-4xl font-display text-2xl md:text-3xl leading-snug text-foreground/85">
            The result is retail that feels{" "}
            <span className="text-gold italic">edited</span> — not assembled. A destination where
            discovery feels natural, prestige is protected, and every brand benefits from the
            intelligence of the whole.
          </p>
        </div>
      </section>

      {/* SECTION 04 — Complete Growth Ecosystem */}
      <EditorialSection
        eyebrow="03 — A Complete Growth Ecosystem"
        title="One connected system for presence, reach, and relevance."
      >
        <p className="max-w-3xl text-muted-foreground leading-relaxed text-base md:text-lg mb-14">
          Growth in premium retail is no longer a single channel. SPACIA integrates the physical,
          digital, and experiential dimensions of expansion into one ecosystem — so designers,
          brands, and companies build momentum across every touchpoint that matters.
        </p>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent -translate-y-1/2" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              {
                icon: Store,
                t: "Physical Retail",
                d: "Premium destinations and display environments where brands meet audiences in person — with presence that commands attention.",
              },
              {
                icon: Monitor,
                t: "Digital Platforms",
                d: "Extensions that carry the story beyond the floor — discovery, engagement, and continuity across channels.",
              },
              {
                icon: Megaphone,
                t: "Marketing Initiatives",
                d: "Editorial campaigns and curated moments that position brands within a wider cultural and commercial conversation.",
              },
              {
                icon: Users,
                t: "Audience Building",
                d: "Communities formed around taste, identity, and belonging — turning visitors into advocates and repeat engagement.",
              },
            ].map((item) => (
              <div key={item.t} className="relative text-center lg:text-left">
                <div className="inline-flex size-12 items-center justify-center rounded-sm border border-gold/30 bg-card/30 mb-6">
                  <item.icon className="size-5 text-gold" />
                </div>
                <div className="font-display text-2xl">{item.t}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 max-w-3xl text-foreground/80 leading-relaxed">
          These are not separate services bolted together. They are layers of one ecosystem —
          composed so that physical presence strengthens digital reach, marketing amplifies
          discovery, and every initiative reinforces the brand&apos;s position in the market.
        </p>
      </EditorialSection>

      {/* SECTION 05 — We Do Not Replace Identities */}
      <section className="relative py-24 md:py-32 border-t border-border/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>04 — Identity Preserved</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-3xl leading-tight">
            We do not replace identities.
          </h2>

          <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At the heart of this ecosystem is a simple belief: every designer, brand, and
                company has earned the right to be seen on its own terms. SPACIA exists to extend
                reach — not to absorb, rebrand, or overshadow the names that trust us.
              </p>
              <p>
                We preserve designer identity — the creative voice, the atelier story, the
                craftsmanship that makes the work distinctive. We preserve brand identity — the
                visual language, the positioning, the emotional connection with its audience. We
                preserve company identity — the strategic ambition, the commercial discipline, and
                the reputation built over years of commitment.
              </p>
              <p className="text-foreground/80">
                SPACIA provides infrastructure, composition, and operational excellence. The name
                on the label remains yours. The story remains yours. The future remains yours to
                shape — with greater reach, stronger markets, and the visibility your work deserves.
              </p>
            </div>

            <blockquote className="border-l border-gold/50 pl-8 md:pl-10 py-2">
              <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
                We do not replace names.
              </p>
              <p className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gradient-gold italic">
                We help them reach the position they deserve.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* SECTION 06 — Operational Freedom */}
      <EditorialSection
        eyebrow="05 — Operational Freedom"
        title="Focus on the work. We handle the complexity."
      >
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <p className="lg:col-span-5 font-display text-3xl md:text-4xl leading-[1.1] tracking-tight">
            Participants enter the ecosystem to build products, strengthen brands, and connect with
            audiences — while SPACIA carries the operational weight of premium retail execution.
          </p>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
            {[
              {
                icon: Package,
                t: "Logistics",
                d: "Movement, fulfilment, and inventory flow managed with discipline — so product arrives where it needs to be, when it needs to be there.",
              },
              {
                icon: Layers,
                t: "Merchandising",
                d: "Display standards, seasonal rotation, and editorial presentation that honour each brand within the composed environment.",
              },
              {
                icon: Sparkles,
                t: "Customer Experience",
                d: "Service rhythms, ambience, and touchpoints designed for premium discovery — consistent with the destination and every brand within it.",
              },
              {
                icon: Compass,
                t: "Daily Operations",
                d: "The routines, reporting, and on-floor coordination that keep environments performing — without pulling founders back into operational detail.",
              },
            ].map((item) => (
              <div key={item.t} className="bg-card/30 p-8 backdrop-blur">
                <item.icon className="size-5 text-gold mb-4" />
                <div className="font-display text-xl">{item.t}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </EditorialSection>

      {/* SECTION 07 — Opportunity, Not Space */}
      <section className="relative py-24 md:py-32 border-t border-border/50 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-25 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>06 — Opportunity, Not Space</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mt-4 max-w-4xl leading-[1.02]">
            At its core, SPACIA is not about{" "}
            <span className="text-gradient-gold italic">renting space.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed text-base md:text-lg">
            It is about opening pathways — measured, curated, and designed for brands ready to grow
            with intention.
          </p>

          <ul className="mt-16 space-y-8 max-w-3xl">
            {[
              "Opportunity to reach new audiences in premium environments where discovery is intentional.",
              "Opportunity to test new markets with structure, intelligence, and reduced exposure.",
              "Opportunity to build stronger visibility and influence across physical and digital channels.",
              "Opportunity to grow with greater confidence and efficiency — without sacrificing identity or control.",
            ].map((line, i) => (
              <li key={line} className="flex gap-6 items-start group">
                <span className="text-gold font-display text-2xl leading-none pt-0.5">
                  0{i + 1}
                </span>
                <p className="text-lg md:text-xl text-foreground/85 leading-relaxed group-hover:text-foreground transition-colors">
                  {line}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 07 — How Expansion Works */}
      <section className="relative py-24 md:py-32 border-t border-border/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Eyebrow>07 — How Expansion Works</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-4xl leading-tight">
            From one market to many.
          </h2>

          <div className="mt-12 md:mt-16 max-w-4xl space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              Most designers, brands, and companies do not struggle because their products lack
              quality.
            </p>
            <p>
              They struggle because expansion traditionally requires large investments, operational
              complexity, unfamiliar markets, and significant risk before demand is ever proven.
            </p>
            <p>SPACIA was designed to offer a different path.</p>
            <p>A path where growth becomes structured, measured, and deliberate.</p>
            <p>
              Instead of carrying the full burden of expansion alone, participants gain access to a
              curated ecosystem designed to accelerate visibility, strengthen market presence, and
              unlock opportunities for long-term growth.
            </p>
          </div>

          <div className="mt-16 md:mt-20 space-y-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
            {[
              {
                step: "01",
                title: "Application & Discovery",
                body: "Designers, brands, and companies enter the ecosystem through a careful evaluation process focused on quality, positioning, audience relevance, and long-term growth potential.",
              },
              {
                step: "02",
                title: "Strategic Curation",
                body: "Our team studies product categories, pricing structures, customer behavior, and commercial compatibility to determine where each participant can create the greatest value and strongest market presence.",
              },
              {
                step: "03",
                title: "Premium Placement",
                body: "Selected participants are introduced inside professionally curated retail destinations where products are positioned within complementary environments designed to encourage discovery, engagement, and commercial performance.",
              },
              {
                step: "04",
                title: "Visibility & Audience Growth",
                body: "Physical retail presence is reinforced through digital platforms, coordinated marketing initiatives, audience-building activities, and brand visibility programs designed to strengthen awareness and customer engagement.",
              },
              {
                step: "05",
                title: "Network Expansion",
                body: "As performance evolves and opportunities emerge, participants gain access to future destinations, additional cities, and new commercial environments across the growing SPACIA network.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="grid md:grid-cols-12 gap-6 md:gap-10 bg-background/90 p-8 md:p-10 backdrop-blur hover:bg-card/30 transition-colors duration-500"
              >
                <div className="md:col-span-3 flex md:flex-col items-baseline md:items-start gap-4 md:gap-3">
                  <span className="text-gold font-display text-3xl md:text-4xl leading-none">
                    {item.step}
                  </span>
                  <div className="hidden md:block h-px w-12 bg-gold/50 mt-2" />
                  <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="md:col-span-9 text-sm md:text-base text-muted-foreground leading-relaxed md:pt-2">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20 max-w-3xl space-y-4 font-display text-2xl md:text-3xl leading-snug text-foreground/85">
            <p>Expansion should not require rebuilding everything from the beginning.</p>
            <p>It should begin with the right environment.</p>
            <p>The right audience.</p>
            <p>The right positioning.</p>
            <p className="text-gradient-gold italic">And the right ecosystem.</p>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground font-sans normal-case tracking-normal leading-relaxed">
              That is the path SPACIA was built to provide.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 08 — Closing Statement */}
      <section className="relative py-28 md:py-36 border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />
          <div className="relative">
            <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight">
              Because the future of retail will not be defined by who occupies the most square
              metres — but by who composes the most{" "}
              <span className="text-gradient-gold italic">intelligent, elevated, and enduring</span>{" "}
              presence in the markets that matter.
            </p>
            <p className="mt-12 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              SPACIA exists to help make that future possible — for designers, brands, and companies
              building the next chapter of premium fashion and lifestyle retail.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs">
      <span className="h-px w-8 bg-gold" />
      {children}
    </div>
  );
}

function EditorialSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative py-20 md:py-28 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-4xl md:text-6xl mt-4 max-w-4xl leading-tight">{title}</h2>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
