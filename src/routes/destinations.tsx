import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { PageHero, PageSection } from "@/components/page-hero";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Spacia Group" },
      { name: "description", content: "SPACIA Destinations — a cinematic portfolio of future retail and lifestyle destinations." },
      { property: "og:title", content: "SPACIA Destinations" },
      { property: "og:description", content: "A curated horizon of future retail and lifestyle destinations." },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 pt-16">
        <PageHero
          eyebrow="The Destinations"
          title={<>SPACIA <span className="italic text-gradient-gold">Destinations</span></>}
          subtitle="A curated horizon of future retail and lifestyle destinations — composed with cinematic intent."
        />
        <PageSection>
          <div className="border border-border/50 rounded-sm py-20 text-center">
            <p className="text-muted-foreground uppercase tracking-[0.3em] text-xs">
              Destination content coming soon.
            </p>
          </div>
        </PageSection>
      </main>
      <SiteFooter />
    </div>
  );
}
