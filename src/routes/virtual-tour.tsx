import { createFileRoute } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-nav";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/virtual-tour")({
  head: () => ({
    meta: [
      { title: "Virtual Tour — Spacia Group" },
      { name: "description", content: "An immersive virtual tour of Spacia destinations. Coming soon." },
    ],
  }),
  component: VirtualTourPage,
});

function VirtualTourPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 pt-16">
        <PageHero
          eyebrow="Coming Soon"
          title={<>Virtual Tour <span className="italic text-gradient-gold">Coming Soon</span></>}
          subtitle="An immersive cinematic walkthrough of Spacia destinations — arriving soon."
        />
      </main>
      <SiteFooter />
    </div>
  );
}
