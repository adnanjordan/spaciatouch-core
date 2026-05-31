import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const CITIES = [
  { name: "Dubai", country: "United Arab Emirates", code: "DXB", cx: 615, cy: 235 },
  { name: "Milan", country: "Italy", code: "MIL", cx: 505, cy: 175 },
  { name: "Paris", country: "France", code: "PAR", cx: 485, cy: 160 },
  { name: "Istanbul", country: "Türkiye", code: "IST", cx: 555, cy: 185 },
  { name: "Riyadh", country: "Saudi Arabia", code: "RUH", cx: 600, cy: 245 },
  { name: "London", country: "United Kingdom", code: "LDN", cx: 475, cy: 145 },
  { name: "Doha", country: "Qatar", code: "DOH", cx: 612, cy: 240 },
  { name: "Amman", country: "Jordan", code: "AMM", cx: 575, cy: 215 },
];

export function GlobalNetworkSection() {
  const [activeCity, setActiveCity] = useState<string>("Dubai");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", city: "Dubai" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="relative py-32 lg:py-48 overflow-hidden border-t border-border/40">
      {/* Cinematic world-map backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <svg
          viewBox="0 0 960 480"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <radialGradient id="cityGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
            </radialGradient>
          </defs>
          {CITIES.map((c) => (
            <g key={c.name}>
              <circle cx={c.cx} cy={c.cy} r="20" fill="url(#cityGlow)" />
              <circle
                cx={c.cx}
                cy={c.cy}
                r="1.6"
                fill="var(--gold)"
                style={{ animation: `pulseCity 4s ease-in-out infinite` }}
              />
            </g>
          ))}
        </svg>
      </div>

      <style>{`
        @keyframes pulseCity {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .luxe-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid color-mix(in oklab, var(--border) 80%, transparent);
          padding: 1rem 0;
          color: var(--foreground);
          font-size: 0.95rem;
          letter-spacing: 0.02em;
          outline: none;
          transition: border-color 0.5s ease;
        }
        .luxe-input::placeholder { color: color-mix(in oklab, var(--muted-foreground) 70%, transparent); }
        .luxe-input:focus { border-bottom-color: var(--gold); }
        .luxe-input option { background: var(--card); color: var(--foreground); }
      `}</style>

      <div className="absolute inset-0 bg-radial-gold opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        {/* Editorial header — minimal, confident */}
        <div className="text-center max-w-3xl mx-auto animate-fade-up">
          <div className="inline-flex items-center gap-3 text-gold uppercase tracking-[0.5em] text-[10px] mb-10">
            <span className="h-px w-8 bg-gold" />
            Global Horizons
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Composed across <span className="italic text-gradient-gold">eight cities</span>.
          </h2>
          <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            A quiet network of future destinations, unfolding city by city.
          </p>
        </div>

        {/* Cities — the visual centerpiece */}
        <div className="mt-24 lg:mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40">
            {CITIES.map((city, i) => {
              const isActive = activeCity === city.name;
              return (
                <button
                  key={city.name}
                  type="button"
                  onMouseEnter={() => setActiveCity(city.name)}
                  onClick={() => {
                    setActiveCity(city.name);
                    setForm((f) => ({ ...f, city: city.name }));
                  }}
                  style={{ animationDelay: `${i * 70}ms` }}
                  className={`group relative text-left px-6 py-10 md:py-14 bg-background transition-all duration-700 animate-fade-up overflow-hidden ${
                    isActive ? "bg-card/30" : "hover:bg-card/20"
                  }`}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-px bg-gold transition-transform duration-700 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-gold/70">
                      {city.code}
                    </span>
                    <ArrowUpRight
                      className={`size-3.5 transition-all duration-500 ${
                        isActive
                          ? "text-gold -translate-y-0.5 translate-x-0.5"
                          : "text-muted-foreground/50 group-hover:text-gold"
                      }`}
                    />
                  </div>
                  <div className="font-display text-3xl md:text-4xl tracking-tight leading-none">
                    {city.name}
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70">
                    {city.country}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Minimal invitation form */}
        <div className="mt-32 lg:mt-40 max-w-2xl mx-auto text-center">
          {submitted ? (
            <div className="animate-fade-up py-16">
              <div className="text-[10px] uppercase tracking-[0.5em] text-gold mb-6">
                Received
              </div>
              <h4 className="font-display text-3xl md:text-4xl leading-tight">
                Welcome to the early circle.
              </h4>
            </div>
          ) : (
            <>
              <div className="text-[10px] uppercase tracking-[0.5em] text-gold mb-6">
                By Invitation
              </div>
              <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tight">
                Be among the first to know.
              </h3>

              <form
                onSubmit={handleSubmit}
                className="mt-14 space-y-8 text-left"
              >
                <input
                  required
                  maxLength={120}
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="luxe-input"
                />
                <input
                  required
                  type="email"
                  maxLength={200}
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="luxe-input"
                />
                <select
                  value={form.city}
                  onChange={(e) => {
                    setForm({ ...form, city: e.target.value });
                    setActiveCity(e.target.value);
                  }}
                  className="luxe-input appearance-none"
                >
                  {CITIES.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>

                <div className="pt-6 text-center">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold border-b border-gold/40 hover:border-gold pb-2 transition-colors"
                  >
                    Request Access
                    <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
