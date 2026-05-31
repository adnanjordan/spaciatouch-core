import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import {
  TrendingUp, TrendingDown, ShoppingBag, Eye, Users, DollarSign,
  Package, MoreHorizontal, ArrowUpRight, Settings2, Bell, Search,
} from "lucide-react";

export const Route = createFileRoute("/vendors")({
  head: () => ({
    meta: [
      { title: "Vendor Dashboard — SPACIA" },
      { name: "description", content: "Track sales, conversion and stand performance across the Spacia network." },
    ],
  }),
  component: VendorDashboard,
});

const kpis = [
  { label: "Revenue (30d)", value: "JOD 24,860", delta: "+18.4%", up: true, icon: DollarSign },
  { label: "Units Sold", value: "1,248", delta: "+9.2%", up: true, icon: ShoppingBag },
  { label: "Stand Visitors", value: "38,402", delta: "+24.1%", up: true, icon: Eye },
  { label: "Conversion", value: "3.25%", delta: "-0.4%", up: false, icon: Users },
];

const stands = [
  { id: "B-014", zone: "Atrium · North", status: "Active", revenue: "JOD 8,420", conv: "4.1%", stock: 86 },
  { id: "B-027", zone: "Atrium · South", status: "Active", revenue: "JOD 6,110", conv: "3.7%", stock: 64 },
  { id: "B-051", zone: "Wing East", status: "Restocking", revenue: "JOD 4,890", conv: "2.9%", stock: 22 },
  { id: "B-082", zone: "Wing West", status: "Active", revenue: "JOD 3,540", conv: "3.2%", stock: 71 },
  { id: "B-103", zone: "Promenade", status: "Idle", revenue: "JOD 1,900", conv: "1.4%", stock: 92 },
];

const sparkData = [12, 18, 14, 22, 28, 24, 32, 30, 38, 34, 42, 48, 44, 52];

function Sparkline({ data, className = "" }: { data: number[]; className?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * 100},${100 - ((v - min) / range) * 100}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={className}>
      <defs>
        <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={points} fill="none" stroke="var(--gold)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <polygon points={`0,100 ${points} 100,100`} fill="url(#sg)" />
    </svg>
  );
}

function VendorDashboard() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <SiteNav />

      <div className="pt-24 max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        {/* header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-gold uppercase tracking-[0.3em] text-xs">Vendor Workspace</div>
            <h1 className="font-display text-4xl md:text-5xl mt-3">Atelier Noir · Live Performance</h1>
            <p className="text-muted-foreground mt-2">Baraka Mall flagship — 5 stands active</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="size-10 grid place-items-center border border-border hover:border-gold/60 text-muted-foreground hover:text-gold transition">
              <Search className="size-4" />
            </button>
            <button className="size-10 grid place-items-center border border-border hover:border-gold/60 text-muted-foreground hover:text-gold transition">
              <Bell className="size-4" />
            </button>
            <button className="size-10 grid place-items-center border border-border hover:border-gold/60 text-muted-foreground hover:text-gold transition">
              <Settings2 className="size-4" />
            </button>
            <div className="ml-3 size-10 rounded-full bg-gradient-gold grid place-items-center text-ink font-display font-semibold">
              AN
            </div>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 mb-10">
          {kpis.map((k) => (
            <div key={k.label} className="bg-card p-6 hover:bg-card/70 transition">
              <div className="flex items-start justify-between">
                <k.icon className="size-5 text-gold" strokeWidth={1.4} />
                <span className={`flex items-center gap-1 text-xs ${k.up ? "text-gold" : "text-destructive"}`}>
                  {k.up ? <TrendingUp className="size-3" /> : <TrendingDown className="size-3" />}
                  {k.delta}
                </span>
              </div>
              <div className="mt-6 font-display text-3xl">{k.value}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{k.label}</div>
            </div>
          ))}
        </div>

        {/* chart + side */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2 border border-border/60 bg-card p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Revenue Trend</div>
                <div className="font-display text-2xl mt-1">Last 14 days</div>
              </div>
              <div className="flex gap-1 text-xs">
                {["1D", "7D", "14D", "30D"].map((t, i) => (
                  <button
                    key={t}
                    className={`px-3 py-1.5 border ${i === 2 ? "border-gold text-gold" : "border-border text-muted-foreground hover:border-gold/40"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-56">
              <Sparkline data={sparkData} className="w-full h-full" />
            </div>
          </div>

          <div className="border border-border/60 bg-card p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Top Product</div>
            <div className="font-display text-2xl mt-1 mb-6">Best Sellers</div>
            <div className="space-y-4">
              {[
                { n: "Obsidian Tote", s: 412 },
                { n: "Brass Cuff", s: 308 },
                { n: "Noir Silk Scarf", s: 244 },
                { n: "Velvet Loafers", s: 187 },
              ].map((p, i) => (
                <div key={p.n} className="flex items-center gap-4">
                  <div className="text-gold font-display text-lg w-6">0{i + 1}</div>
                  <div className="flex-1">
                    <div className="text-sm">{p.n}</div>
                    <div className="h-1 bg-secondary mt-2 overflow-hidden">
                      <div className="h-full bg-gradient-gold" style={{ width: `${(p.s / 412) * 100}%` }} />
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground tabular-nums">{p.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* stands table */}
        <div className="border border-border/60 bg-card">
          <div className="flex items-center justify-between p-6 border-b border-border/60">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Display Stands</div>
              <div className="font-display text-2xl mt-1">Stand Performance</div>
            </div>
            <button className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold hover:underline">
              Manage all <ArrowUpRight className="size-3" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs uppercase tracking-[0.2em] text-muted-foreground border-b border-border/60">
                <tr>
                  <th className="text-left p-4 font-normal">Stand</th>
                  <th className="text-left p-4 font-normal">Zone</th>
                  <th className="text-left p-4 font-normal">Status</th>
                  <th className="text-right p-4 font-normal">Revenue</th>
                  <th className="text-right p-4 font-normal">Conv.</th>
                  <th className="text-left p-4 font-normal">Stock</th>
                  <th className="p-4" />
                </tr>
              </thead>
              <tbody>
                {stands.map((s) => (
                  <tr key={s.id} className="border-b border-border/40 hover:bg-secondary/40 transition">
                    <td className="p-4 font-display text-gold">{s.id}</td>
                    <td className="p-4 text-muted-foreground">{s.zone}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] ${
                        s.status === "Active" ? "text-gold" : s.status === "Idle" ? "text-destructive" : "text-muted-foreground"
                      }`}>
                        <span className="size-1.5 rounded-full bg-current" />
                        {s.status}
                      </span>
                    </td>
                    <td className="p-4 text-right tabular-nums">{s.revenue}</td>
                    <td className="p-4 text-right tabular-nums text-muted-foreground">{s.conv}</td>
                    <td className="p-4 w-40">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1 bg-secondary overflow-hidden">
                          <div
                            className={`h-full ${s.stock < 30 ? "bg-destructive" : "bg-gradient-gold"}`}
                            style={{ width: `${s.stock}%` }}
                          />
                        </div>
                        <span className="text-xs tabular-nums text-muted-foreground">{s.stock}%</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground"><MoreHorizontal className="size-4" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* logistics */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            { i: Package, t: "Pending Restocks", v: "3", d: "Stand B-051, B-103, B-027" },
            { i: ShoppingBag, t: "Today's Orders", v: "84", d: "JOD 1,920 captured" },
            { i: Users, t: "Live Visitors", v: "212", d: "Across all 5 stands" },
          ].map((c) => (
            <div key={c.t} className="border border-border/60 bg-card p-6">
              <c.i className="size-6 text-gold mb-4" strokeWidth={1.4} />
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.t}</div>
              <div className="font-display text-3xl mt-1">{c.v}</div>
              <div className="text-sm text-muted-foreground mt-2">{c.d}</div>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
