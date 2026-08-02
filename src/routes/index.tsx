import { createFileRoute } from "@tanstack/react-router";

import { TopBar, Hero } from "@/components/landing/HeroSection";
import { GallerySection, SecondaryCarousel } from "@/components/landing/GallerySection";
import {
  ValueSection,
  PainSection,
  IdealForSection,
  DeliverablesSection,
} from "@/components/landing/ValueSections";
import { BonusSection, PlansSection } from "@/components/landing/BonusPlansSections";
import {
  TestimonialsSection,
  GuaranteeSection,
  StepsSection,
  FaqSection,
  SiteFooter,
} from "@/components/landing/ProofSections";

const TITLE = "Atlas Visual de Parasitas do Rebanho | Método IVR™";
const DESCRIPTION =
  "+100 parasitas do rebanho organizados por sintoma para identificar em segundos no curral. Acesso imediato, vitalício e garantia de 7 dias.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Hero />
      <GallerySection />
      <SecondaryCarousel />
      <ValueSection />
      <PainSection />
      <IdealForSection />
      <DeliverablesSection />
      <BonusSection />
      <PlansSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <StepsSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
