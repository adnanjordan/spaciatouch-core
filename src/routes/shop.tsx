import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Spacia Group" },
      { name: "description", content: "The Spacia shop is being composed. Coming soon." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 pt-16">
        <PageHero
          eyebrow="Coming Soon"
          title={<>Shop <span className="italic text-gradient-gold">Coming Soon</span></>}
          subtitle="The Spacia shop is being composed — a curated retail experience, arriving soon."
        />
      </main>
      <SiteFooter />
    </div>
  );
}
