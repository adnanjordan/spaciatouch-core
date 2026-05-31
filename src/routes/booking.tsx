import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { useMemo, useState } from "react";
import { Calendar, Lock, MapPin, Sparkles, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Smart Booking — SPACIA" },
      { name: "description", content: "Reserve one of 120 smart stands at our 365 sqm Baraka Mall flagship — 50 Wall, 70 Center." },
    ],
  }),
  component: Booking,
});

type Stand = { id: string; type: "Wall" | "Center"; status: "available" | "held" | "booked" };

function buildStands(): Stand[] {
  const stands: Stand[] = [];
  for (let i = 1; i <= 50; i++) {
    stands.push({
      id: `W-${i.toString().padStart(2, "0")}`,
      type: "Wall",
      status: i % 7 === 0 ? "booked" : i % 11 === 0 ? "held" : "available",
    });
  }
  for (let i = 1; i <= 70; i++) {
    stands.push({
      id: `C-${i.toString().padStart(2, "0")}`,
      type: "Center",
      status: i % 5 === 0 ? "booked" : i % 13 === 0 ? "held" : "available",
    });
  }
  return stands;
}

function Booking() {
  const stands = useMemo(buildStands, []);
  const [filter, setFilter] = useState<"All" | "Wall" | "Center">("All");
  const [selected, setSelected] = useState<string | null>(null);

  const visible = stands.filter((s) => filter === "All" || s.type === filter);
  const counts = {
    available: stands.filter((s) => s.status === "available").length,
    held: stands.filter((s) => s.status === "held").length,
    booked: stands.filter((s) => s.status === "booked").length,
  };
  const selectedStand = stands.find((s) => s.id === selected);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <SiteNav />

      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-gold uppercase tracking-[0.4em] text-xs">Smart Booking · Beta</div>
          <h1 className="font-display text-5xl md:text-6xl mt-5 leading-[0.95] max-w-3xl">
            Reserve a stand at <span className="text-gradient-gold">Baraka Mall.</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl">
            120 smart stands across 365 sqm. Choose your position — wall-anchored boutique or
            high-traffic center island — and lock it in. Live commerce begins on signature.
          </p>
        </div>
      </section>

      {/* Stat strip */}
      <div className="border-y border-border/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60">
          {[
            { v: "120", l: "Total Stands" },
            { v: "50", l: "Wall · Boutique" },
            { v: "70", l: "Center · Island" },
            { v: counts.available.toString(), l: "Available Now" },
          ].map((m) => (
            <div key={m.l} className="px-4 py-8 text-center">
              <div className="font-display text-3xl md:text-4xl text-gradient-gold">{m.v}</div>
              <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground">{m.l}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-[1fr_360px] gap-10">
        {/* Map */}
        <div className="border border-border/60 bg-card">
          <div className="flex flex-wrap items-center justify-between gap-4 p-6 border-b border-border/60">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Floor Plan</div>
              <div className="font-display text-2xl mt-1">Baraka Mall · Level 1</div>
            </div>
            <div className="flex gap-1 text-xs">
              {(["All", "Wall", "Center"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 border ${filter === f ? "border-gold text-gold" : "border-border text-muted-foreground hover:border-gold/40"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-6 px-6 py-4 border-b border-border/60 text-xs text-muted-foreground">
            <span className="flex items-center gap-2"><span className="size-3 border border-gold/40" />Available</span>
            <span className="flex items-center gap-2"><span className="size-3 bg-gold/20 border border-gold/60" />Held</span>
            <span className="flex items-center gap-2"><span className="size-3 bg-secondary border border-border" />Booked</span>
            <span className="flex items-center gap-2"><span className="size-3 bg-gradient-gold" />Selected</span>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-10 gap-1.5">
              {visible.map((s) => {
                const isSel = selected === s.id;
                const base = "aspect-square text-[9px] font-mono grid place-items-center transition-all border";
                const cls =
                  isSel ? "bg-gradient-gold text-ink border-gold" :
                  s.status === "booked" ? "bg-secondary text-muted-foreground/50 border-border cursor-not-allowed" :
                  s.status === "held" ? "bg-gold/10 text-gold/70 border-gold/40 cursor-not-allowed" :
                  "border-gold/30 text-muted-foreground hover:border-gold hover:text-gold cursor-pointer";
                return (
                  <button
                    key={s.id}
                    disabled={s.status !== "available"}
                    onClick={() => setSelected(s.id)}
                    className={`${base} ${cls} ${s.type === "Wall" ? "rounded-none" : "rounded-full"}`}
                    title={`${s.id} · ${s.type} · ${s.status}`}
                  >
                    {s.id.split("-")[1]}
                  </button>
                );
              })}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Squares = wall stands. Circles = center islands. Click an available stand to begin.
            </p>
          </div>
        </div>

        {/* Reservation panel */}
        <aside className="border border-gold/30 bg-card/60 backdrop-blur p-6 h-fit lg:sticky lg:top-24">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Reservation</div>
          <div className="font-display text-2xl mt-1">
            {selectedStand ? `Stand ${selectedStand.id}` : "Select a stand"}
          </div>

          {selectedStand ? (
            <>
              <div className="mt-6 space-y-3 text-sm">
                <Row label="Type" value={`${selectedStand.type} · ${selectedStand.type === "Wall" ? "Boutique" : "Island"}`} />
                <Row label="Footprint" value={selectedStand.type === "Wall" ? "3.0 × 2.5 m" : "2.0 × 2.0 m"} />
                <Row label="Min. tenancy" value="3 months" />
                <Row label="Monthly fee" value={selectedStand.type === "Wall" ? "JOD 1,450" : "JOD 1,180"} />
                <Row label="Setup" value="Included" />
              </div>

              <button
                disabled
                className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-ink px-6 py-3 text-sm uppercase tracking-[0.2em] rounded-sm shadow-gold opacity-90"
              >
                <Lock className="size-4" /> Hold Stand · Coming Soon
              </button>
              <p className="mt-3 text-[11px] text-muted-foreground text-center">
                Booking system in private beta. Submit interest below to be onboarded.
              </p>
            </>
          ) : (
            <p className="mt-4 text-sm text-muted-foreground">
              Pick any available square or circle on the floor plan to view pricing and tenancy
              terms.
            </p>
          )}

          <div className="mt-8 pt-6 border-t border-border/60 space-y-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><MapPin className="size-3.5 text-gold" /> Baraka Mall, Amman</div>
            <div className="flex items-center gap-2"><Calendar className="size-3.5 text-gold" /> Q2 2026 onboarding</div>
            <div className="flex items-center gap-2"><Sparkles className="size-3.5 text-gold" /> Spacia OS included</div>
          </div>
        </aside>
      </section>

      {/* Interest CTA */}
      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-24">
        <div className="border border-border/60 bg-card p-10 md:p-14 grain relative overflow-hidden">
          <div className="text-gold uppercase tracking-[0.3em] text-xs">Vendor Interest</div>
          <h2 className="font-display text-3xl md:text-4xl mt-3 max-w-2xl leading-tight">
            Be first in line when Smart Booking goes live.
          </h2>
          <form className="mt-8 grid md:grid-cols-[1fr_1fr_auto] gap-3">
            <input
              type="text"
              placeholder="Brand name"
              className="bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm"
            />
            <input
              type="email"
              placeholder="Contact email"
              className="bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm"
            />
            <button
              type="button"
              className="bg-gradient-gold text-ink px-6 py-3 text-xs uppercase tracking-[0.25em] inline-flex items-center justify-center gap-2 hover:opacity-90"
            >
              Request Access <ArrowUpRight className="size-3.5" />
            </button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">
            We'll reach out within 48 hours. No spam, ever.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-border/40 pb-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}
