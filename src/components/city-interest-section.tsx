import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";

const CITIES = [
  { name: "Dubai", country: "United Arab Emirates", code: "DXB", coord: { x: 62, y: 52 } },
  { name: "Milan", country: "Italy", code: "MIL", coord: { x: 49, y: 38 } },
  { name: "Paris", country: "France", code: "PAR", coord: { x: 47, y: 36 } },
  { name: "Istanbul", country: "Türkiye", code: "IST", coord: { x: 55, y: 41 } },
  { name: "Riyadh", country: "Saudi Arabia", code: "RUH", coord: { x: 60, y: 51 } },
  { name: "London", country: "United Kingdom", code: "LON", coord: { x: 46, y: 33 } },
  { name: "Doha", country: "Qatar", code: "DOH", coord: { x: 61, y: 51 } },
  { name: "Amman", country: "Jordan", code: "AMM", coord: { x: 56, y: 45 } },
];

export function CityInterestSection() {
  const [activeCity, setActiveCity] = useState<string>("Dubai");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden bg-background">
      {/* Cinematic world map background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          viewBox="0 0 100 60"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <radialGradient id="cityGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--gold))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--gold))" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* dotted continent suggestion */}
          {Array.from({ length: 320 }).map((_, i) => {
            const x = (i * 37) % 100;
            const y = (i * 19) % 60;
            return <circle key={i} cx={x} cy={y} r="0.18" fill="hsl(var(--gold))" />;
          })}
          {CITIES.map((c) => (
            <g key={c.code}>
              <circle cx={c.coord.x} cy={c.coord.y} r="4" fill="url(#cityGlow)" />
              <circle cx={c.coord.x} cy={c.coord.y} r="0.5" fill="hsl(var(--gold))" />
            </g>
          ))}
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-8">
            <span className="h-px w-10 bg-gold" />
            Future Destinations
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Cities being <span className="text-gradient-gold italic">composed</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
            A quiet selection of capitals shaping the next chapter of Spacia.
            Register your interest in a destination and become part of its
            opening circle.
          </p>
        </div>

        {/* City grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-gold/10 border border-gold/10 mb-24">
          {CITIES.map((city) => {
            const isActive = activeCity === city.name;
            return (
              <button
                key={city.code}
                onClick={() => setActiveCity(city.name)}
                className={`group relative bg-background p-6 md:p-8 text-left transition-all duration-500 ${
                  isActive ? "bg-gold/[0.04]" : "hover:bg-gold/[0.02]"
                }`}
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="text-[10px] tracking-[0.3em] text-gold/70 uppercase">
                    {city.code}
                  </span>
                  <ArrowUpRight
                    className={`h-4 w-4 transition-all duration-500 ${
                      isActive
                        ? "text-gold translate-x-0.5 -translate-y-0.5"
                        : "text-muted-foreground group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    }`}
                  />
                </div>
                <div className="font-display text-xl md:text-2xl tracking-tight">
                  {city.name}
                </div>
                <div className="text-xs text-muted-foreground mt-1.5 tracking-wide">
                  {city.country}
                </div>
                <div
                  className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-700 ${
                    isActive ? "w-full" : "w-0 group-hover:w-1/3"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Interest form */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-gold mb-5">
              <MapPin className="h-4 w-4" />
              <span className="text-[10px] tracking-[0.3em] uppercase">
                Selected · {activeCity}
              </span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tight mb-5">
              Be among the first invited.
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              A confidential introduction to the Spacia destination of your
              choice. Reserved for designers, partners and patrons of the
              network.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="lg:col-span-7 space-y-8"
          >
            {submitted ? (
              <div className="border border-gold/20 bg-gold/[0.03] p-10 text-center">
                <div className="text-gold text-[10px] tracking-[0.4em] uppercase mb-3">
                  Received
                </div>
                <div className="font-display text-2xl md:text-3xl">
                  We will be in touch privately.
                </div>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-8">
                  <LuxeInput label="Full Name" name="name" required />
                  <LuxeInput label="Email" name="email" type="email" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <LuxeSelect
                    label="Destination of Interest"
                    name="city"
                    value={activeCity}
                    onChange={(v) => setActiveCity(v)}
                    options={CITIES.map((c) => c.name)}
                  />
                  <LuxeSelect
                    label="I Am"
                    name="role"
                    options={[
                      "Designer",
                      "Fashion Brand",
                      "Investor",
                      "Retail Partner",
                      "Private Patron",
                    ]}
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold/90 to-gold text-background text-xs tracking-[0.3em] uppercase font-medium hover:from-gold hover:to-gold/90 transition-all"
                  >
                    Register Interest
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function LuxeInput({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold outline-none py-2 text-foreground placeholder:text-muted-foreground/40 transition-colors"
      />
    </label>
  );
}

function LuxeSelect({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  value?: string;
  onChange?: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
        {label}
      </span>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full bg-transparent border-0 border-b border-gold/20 focus:border-gold outline-none py-2 text-foreground transition-colors appearance-none cursor-pointer"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-background text-foreground">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
