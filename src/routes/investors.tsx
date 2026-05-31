import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { Check, MapPin, TrendingUp, Building2, Globe2, Download, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investor Portal — SPACIA" },
      { name: "description", content: "1,000,000 JOD expansion roadmap. Spacia Group investment opportunity." },
    ],
  }),
  component: InvestorPortal,
});

const useOfFunds = [
  { label: "New Locations (3 cities)", pct: 45, amt: "450,000" },
  { label: "Smart Stand Manufacturing", pct: 25, amt: "250,000" },
  { label: "Spacia OS Platform R&D", pct: 18, amt: "180,000" },
  { label: "Brand & Vendor Acquisition", pct: 12, amt: "120,000" },
];

const phases = [
  {
    q: "Q1 2026",
    title: "Foundation",
    status: "Complete",
    points: ["Baraka Mall flagship — 365 sqm", "120 smart stands deployed", "Vendor OS v1 launched"],
  },
  {
    q: "Q2 2026",
    title: "Capital Round",
    status: "Active",
    points: ["1,000,000 JOD raise", "Investor onboarding", "Operational scale-up team"],
  },
  {
    q: "Q3 2026",
    title: "Regional Expansion",
    status: "Upcoming",
    points: ["Abdali Mall — 280 sqm", "Mecca Mall — 320 sqm", "+240 additional stands"],
  },
  {
    q: "Q4 2026",
    title: "Platform Maturity",
    status: "Upcoming",
    points: ["AI-driven merchandising", "Vendor marketplace launch", "Cross-stand loyalty"],
  },
  {
    q: "2027",
    title: "Gulf Entry",
    status: "Vision",
    points: ["Riyadh & Dubai pilots", "Series A readiness", "1,000+ stands network"],
  },
];

function InvestorPortal() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <SiteNav />

      {/* hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-gold uppercase tracking-[0.4em] text-xs">Confidential · Investor Portal</div>
          <h1 className="font-display text-5xl md:text-7xl mt-6 leading-[0.95] max-w-4xl">
            A <span className="text-gradient-gold">1,000,000 JOD</span><br />
            Expansion Roadmap.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Spacia Group is raising growth capital to scale the OS of future retail across
            Jordan and the Gulf. The plan, the math, and the milestones — laid out below.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#deck" className="inline-flex items-center gap-2 bg-gradient-gold text-ink px-8 py-4 text-sm uppercase tracking-[0.2em] rounded-sm shadow-gold hover:opacity-90 transition">
              <Download className="size-4" /> Request Deck
            </a>
            <a href="#roadmap" className="inline-flex items-center gap-2 border border-gold/40 text-gold px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-gold/10 transition">
              View Roadmap <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* highlights */}
      <section className="border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60">
          {[
            { v: "1M JOD", l: "Round Size" },
            { v: "20%", l: "Equity Offered" },
            { v: "5M JOD", l: "Pre-money" },
            { v: "3.2x", l: "Projected ARR (24m)" },
          ].map((m) => (
            <div key={m.l} className="px-4 py-10 text-center">
              <div className="font-display text-3xl md:text-4xl text-gradient-gold">{m.v}</div>
              <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground">{m.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* use of funds */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-gold uppercase tracking-[0.3em] text-xs">Allocation</div>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Where capital goes.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Capital is deployed against measurable infrastructure: new flagship locations,
              owned smart-stand inventory, and the Spacia OS platform that compounds margin
              with every additional stand.
            </p>
          </div>

          <div className="space-y-6">
            {useOfFunds.map((u) => (
              <div key={u.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span>{u.label}</span>
                  <span className="text-gold tabular-nums">JOD {u.amt}</span>
                </div>
                <div className="h-1 bg-secondary overflow-hidden">
                  <div className="h-full bg-gradient-gold" style={{ width: `${u.pct}%` }} />
                </div>
                <div className="text-xs text-muted-foreground mt-1 tabular-nums">{u.pct}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* roadmap */}
      <section id="roadmap" className="py-24 border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <div className="text-gold uppercase tracking-[0.3em] text-xs">Roadmap</div>
            <h2 className="font-display text-4xl md:text-5xl mt-3">From flagship to network.</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

            <div className="space-y-12">
              {phases.map((p, i) => (
                <div key={p.q} className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                  <div className={`md:[direction:ltr] ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <div className="text-gold uppercase tracking-[0.3em] text-xs">{p.q}</div>
                    <h3 className="font-display text-3xl mt-2">{p.title}</h3>
                    <span className={`inline-flex mt-3 text-xs uppercase tracking-[0.2em] px-3 py-1 border ${
                      p.status === "Complete" ? "border-gold text-gold" :
                      p.status === "Active" ? "border-gold/60 text-gold bg-gold/5" :
                      "border-border text-muted-foreground"
                    }`}>
                      {p.status}
                    </span>
                  </div>

                  <div className={`md:[direction:ltr] ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <ul className="space-y-3">
                      {p.points.map((pt) => (
                        <li key={pt} className={`flex items-start gap-3 text-muted-foreground ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                          <Check className="size-4 text-gold mt-1 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 size-3 rounded-full bg-gold ring-4 ring-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* locations */}
      <section className="py-24 border-t border-border/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-gold uppercase tracking-[0.3em] text-xs">Network</div>
          <h2 className="font-display text-4xl md:text-5xl mt-3 mb-12">Target footprint by 2027.</h2>

          <div className="grid md:grid-cols-3 gap-px bg-border/60 border border-border/60">
            {[
              { city: "Amman", status: "Live", stands: "120", icon: Building2 },
              { city: "Riyadh", status: "Pilot 2027", stands: "200", icon: MapPin },
              { city: "Dubai", status: "Pilot 2027", stands: "240", icon: Globe2 },
            ].map((l) => (
              <div key={l.city} className="bg-card p-8">
                <l.icon className="size-6 text-gold mb-6" strokeWidth={1.2} />
                <div className="font-display text-3xl">{l.city}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2">{l.status}</div>
                <div className="mt-6 pt-6 border-t border-border/60 flex justify-between text-sm">
                  <span className="text-muted-foreground">Smart stands</span>
                  <span className="text-gold tabular-nums">{l.stands}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="deck" className="py-24 border-t border-border/60">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <TrendingUp className="size-10 text-gold mx-auto mb-6" strokeWidth={1.2} />
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Ready to <span className="text-gradient-gold">co-author</span> the next chapter?
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Request the full investor memorandum, financial model and term sheet. Conversations
            are confidential and partner-led.
          </p>
          <a
            href="mailto:invest@spacia.group"
            className="mt-10 inline-flex items-center gap-2 bg-gradient-gold text-ink px-10 py-4 text-sm uppercase tracking-[0.2em] rounded-sm shadow-gold hover:opacity-90 transition"
          >
            invest@spacia.group <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
