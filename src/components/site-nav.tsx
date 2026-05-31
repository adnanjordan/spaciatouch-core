import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavLink = { to: string; label: string; hash?: boolean };

const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/destinations", label: "Destinations" },
  { to: "/vendors", label: "Vendors" },
  { to: "/investors", label: "Investors" },
  { to: "/shop", label: "Shop" },
  { to: "/virtual-tour", label: "Virtual Tour" },
  { to: "/#contact", label: "Contact", hash: true },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-8 w-8 rounded-sm bg-gradient-gold grid place-items-center text-ink font-display font-bold">S</span>
          <span className="font-display text-xl tracking-wide">
            SPACIA <span className="text-gold/70 text-xs uppercase tracking-[0.3em] ml-1">Group</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) =>
            l.hash ? (
              <a
                key={l.to}
                href={l.to}
                className="text-muted-foreground hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className="text-muted-foreground hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <Link
          to="/investors"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-sm border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-ink transition-colors"
        >
          Invest
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur">
          <div className="px-6 py-4 space-y-3">
            {links.map((l) =>
              l.hash ? (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-muted-foreground hover:text-gold"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-muted-foreground hover:text-gold"
                  activeProps={{ className: "block text-sm text-gold" }}
                >
                  {l.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border/50 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-display text-2xl">SPACIA</div>
          <p className="text-muted-foreground mt-2 max-w-xs">
            A Dubai-based platform composing the future of global retail experiences.
          </p>
        </div>
        <div>
          <div className="text-gold uppercase text-xs tracking-[0.3em] mb-3">Horizons</div>
          <p className="text-muted-foreground">Dubai · Amman · Riyadh</p>
          <p className="text-muted-foreground">Istanbul · Milan · Paris</p>
        </div>
        <div>
          <div className="text-gold uppercase text-xs tracking-[0.3em] mb-3">Network</div>
          <p className="text-muted-foreground">network@spacia.group</p>
          <p className="text-muted-foreground">Dubai · United Arab Emirates</p>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Spacia Group. All rights reserved.
      </div>
    </footer>
  );
}
