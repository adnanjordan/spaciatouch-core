import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/collective")({
  head: () => ({
    meta: [
      { title: "Join The Collective — SPACIA" },
      {
        name: "description",
        content:
          "An invitation to designers, brands, and creative voices shaping the next generation of global retail with SPACIA.",
      },
      { property: "og:title", content: "Join The Collective — SPACIA" },
      {
        property: "og:description",
        content:
          "A quiet, growing network of designers and brands forming across international cities.",
      },
    ],
  }),
  component: CollectivePage,
});

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria",
  "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
  "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia",
  "Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica",
  "Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt",
  "El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon",
  "Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana",
  "Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel",
  "Italy","Ivory Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait",
  "Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
  "Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico",
  "Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru",
  "Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman",
  "Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
  "Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines",
  "Samoa","San Marino","São Tomé and Príncipe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone",
  "Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain",
  "Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand",
  "Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine",
  "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela",
  "Vietnam","Yemen","Zambia","Zimbabwe","Other",
];

const DISCIPLINES = [
  "Fashion Designer",
  "Emerging Brand",
  "Atelier / Couture",
  "Accessories",
  "Concept Store",
  "Other",
];

function CollectivePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    brand: "",
    email: "",
    country: "",
    city: "",
    discipline: "",
    portfolio: "",
    message: "",
  });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    const subject = encodeURIComponent(`Collective Application — ${form.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Brand: ${form.brand}`,
        `Email: ${form.email}`,
        `Country: ${form.country}`,
        `City: ${form.city}`,
        `Discipline: ${form.discipline}`,
        `Portfolio: ${form.portfolio}`,
        ``,
        form.message,
      ].join("\n"),
    );
    window.location.href = `mailto:network@spacia.group?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 text-gold uppercase tracking-[0.4em] text-[10px]">
            <span className="h-px w-8 bg-gold" />
            The Collective
          </div>

          <h1 className="mt-8 font-display text-5xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl">
            An invitation to the
            <span className="text-gradient-gold italic"> quietly extraordinary.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            SPACIA is forming a small, considered circle of designers, ateliers,
            and emerging houses — a network shaping the next era of global
            retail across Dubai, Milan, Paris, Istanbul, and beyond.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative py-24 lg:py-32 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-[10px] uppercase tracking-[0.4em] text-gold/80">
              Why We Are Building This
            </div>
            <h2 className="mt-6 font-display text-3xl md:text-4xl leading-tight">
              Retail, reimagined for the
              <span className="text-gradient-gold italic"> next generation.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The luxury floor is being rewritten. The next decade belongs to
              designers and brands who think globally, move quietly, and build
              with intention.
            </p>
            <p>
              The Collective is our way of working alongside them — sharing
              spaces, audiences, infrastructure, and international stages
              across the cities that define modern style.
            </p>
            <p>
              We open the door slowly. New voices are welcomed by introduction,
              by conversation, and by mutual conviction.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative py-24 lg:py-32 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40 border border-border/40">
            {[
              {
                k: "01",
                t: "Global Stages",
                d: "Curated retail spaces in international cities, with shared visibility and audience.",
              },
              {
                k: "02",
                t: "Quiet Infrastructure",
                d: "Logistics, e-commerce, and operations handled discreetly behind the scenes.",
              },
              {
                k: "03",
                t: "Considered Community",
                d: "A circle of peers — designers, ateliers, and houses with shared standards.",
              },
            ].map((p) => (
              <div
                key={p.k}
                className="bg-background/80 p-10 min-h-[220px] flex flex-col justify-between"
              >
                <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/70">
                  {p.k}
                </span>
                <div>
                  <div className="font-display text-2xl">{p.t}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application */}
      <section className="relative py-28 lg:py-40 border-t border-border/50 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-20 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 text-gold uppercase tracking-[0.4em] text-[10px]">
            <span className="h-px w-8 bg-gold" />
            Apply
          </div>
          <h2 className="mt-8 font-display text-4xl md:text-5xl leading-tight">
            Introduce yourself.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Share a few details. We respond personally to every submission that
            resonates with the direction of The Collective.
          </p>

          {submitted ? (
            <div className="mt-16 border border-gold/40 bg-card/40 p-10 text-center">
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold">
                Received
              </div>
              <p className="mt-4 font-display text-2xl">
                Thank you. We will be in touch.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <Field label="Full Name" required>
                <input
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="luxe-input"
                />
              </Field>
              <Field label="Brand / Atelier">
                <input
                  maxLength={120}
                  value={form.brand}
                  onChange={(e) => update("brand", e.target.value)}
                  className="luxe-input"
                />
              </Field>
              <Field label="Email" required>
                <input
                  required
                  type="email"
                  maxLength={180}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="luxe-input"
                />
              </Field>
              <Field label="Where Are You Based">
                <select
                  value={form.country}
                  onChange={(e) => update("country", e.target.value)}
                  className="luxe-input bg-transparent"
                >
                  <option value="">Select Country</option>
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c} className="bg-background">
                      {c}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="City (Optional)">
                <input
                  maxLength={80}
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  className="luxe-input"
                />
              </Field>
              <Field label="Discipline">
                <select
                  value={form.discipline}
                  onChange={(e) => update("discipline", e.target.value)}
                  className="luxe-input bg-transparent"
                >
                  <option value="">Select</option>
                  {DISCIPLINES.map((d) => (
                    <option key={d} value={d} className="bg-background">
                      {d}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Portfolio / Instagram">
                <input
                  maxLength={200}
                  value={form.portfolio}
                  onChange={(e) => update("portfolio", e.target.value)}
                  className="luxe-input"
                  placeholder="https://"
                />
              </Field>
              <div className="md:col-span-2">
                <Field label="A few words">
                  <textarea
                    rows={4}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="luxe-input resize-none"
                  />
                </Field>
              </div>

              <div className="md:col-span-2 flex flex-col items-center mt-6">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 bg-gradient-gold text-ink px-8 py-4 rounded-sm text-xs uppercase tracking-[0.3em] font-medium shadow-gold hover:opacity-90 transition"
                >
                  Submit Application
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <p className="mt-6 text-xs text-muted-foreground/70 tracking-wider">
                  By introduction only. New voices are welcomed slowly.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/80">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </span>
      <div className="mt-3">{children}</div>
    </label>
  );
}
