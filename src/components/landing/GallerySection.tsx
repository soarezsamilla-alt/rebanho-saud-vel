import { CtaButton, Section, SectionTitle } from "./CtaButton";
import { ImagePlaceholder } from "./ImagePlaceholder";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import a01 from "@/assets/amostras/amostra-01.jpg.asset.json";
import a02 from "@/assets/amostras/amostra-02.jpg.asset.json";
import a03 from "@/assets/amostras/amostra-03.jpg.asset.json";
import a04 from "@/assets/amostras/amostra-04.jpg.asset.json";
import a05 from "@/assets/amostras/amostra-05.jpg.asset.json";
import a06 from "@/assets/amostras/amostra-06.jpg.asset.json";
import a07 from "@/assets/amostras/amostra-07.jpg.asset.json";
import a08 from "@/assets/amostras/amostra-08.jpg.asset.json";
import a09 from "@/assets/amostras/amostra-09.jpg.asset.json";
import a10 from "@/assets/amostras/amostra-10.jpg.asset.json";
import a11 from "@/assets/amostras/amostra-11.jpg.asset.json";
import a12 from "@/assets/amostras/amostra-12.jpg.asset.json";

const GALLERY_IMAGES: ReadonlyArray<{ url: string; alt: string }> = [
  { url: a01.url, alt: "Amostra 1 do Atlas Visual de Parasitas do Rebanho" },
  { url: a02.url, alt: "Amostra 2 do Atlas Visual de Parasitas do Rebanho" },
  { url: a03.url, alt: "Amostra 3 do Atlas Visual de Parasitas do Rebanho" },
  { url: a04.url, alt: "Amostra 4 do Atlas Visual de Parasitas do Rebanho" },
  { url: a05.url, alt: "Amostra 5 do Atlas Visual de Parasitas do Rebanho" },
  { url: a06.url, alt: "Amostra 6 do Atlas Visual de Parasitas do Rebanho" },
  { url: a07.url, alt: "Amostra 7 do Atlas Visual de Parasitas do Rebanho" },
  { url: a08.url, alt: "Amostra 8 do Atlas Visual de Parasitas do Rebanho" },
  { url: a09.url, alt: "Amostra 9 do Atlas Visual de Parasitas do Rebanho" },
  { url: a10.url, alt: "Amostra 10 do Atlas Visual de Parasitas do Rebanho" },
  { url: a11.url, alt: "Amostra 11 do Atlas Visual de Parasitas do Rebanho" },
  { url: a12.url, alt: "Amostra 12 do Atlas Visual de Parasitas do Rebanho" },
];

const PARASITES: ReadonlyArray<{ name: string; detail: string }> = [
  { name: "Carrapato", detail: "Sinais de infestação e época de maior risco no seu estado." },
  {
    name: "Verminose (endoparasitas)",
    detail: "Sintomas de perda de peso e queda de imunidade.",
  },
  { name: "Mosca-dos-chifres", detail: "Identificação rápida e impacto na produção." },
  { name: "Berne", detail: "Reconhecimento do estágio larval e ação recomendada." },
  { name: "Bicheira", detail: "Sinais precoces antes da infestação se agravar." },
  { name: "Sarna", detail: "Diferenciação visual de outras irritações de pele." },
  { name: "Piolho bovino", detail: "Identificação por região do corpo do animal." },
  { name: "Ectoparasitas em geral", detail: "Guia comparativo para não confundir sintomas." },
];

const CAROUSEL_IMAGES = [
  "carrossel-parasita-1",
  "carrossel-parasita-2",
  "carrossel-fazenda-1",
  "carrossel-fazenda-2",
  "carrossel-fazenda-3",
] as const;

export function GallerySection() {
  return (
    <Section className="bg-background">
      <SectionTitle>Veja alguns dos parasitas que você vai identificar</SectionTitle>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          dragFree: true,
        }}
        className="mt-10 w-full"
      >
        <CarouselContent className="-ml-4">
          {GALLERY_IMAGES.map((image) => (
            <CarouselItem
              key={image.url}
              className="basis-auto pl-4"
            >
              <figure className="rounded-xl border border-border bg-card p-2 shadow-card-soft">
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-[280px] w-auto rounded-lg object-contain sm:h-[360px] md:h-[440px] lg:h-[520px]"
                />
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur sm:-left-4" />
        <CarouselNext className="right-2 top-1/2 -translate-y-1/2 bg-background/90 backdrop-blur sm:-right-4" />
      </Carousel>

      <p className="mt-12 text-center font-display text-lg font-semibold text-balance sm:text-xl">
        Mais de 100 parasitas organizados para consulta rápida — incluindo:
      </p>

      <ul className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-2">
        {PARASITES.map((item) => (
          <li
            key={item.name}
            className="rounded-xl border border-border bg-card p-4 shadow-card-soft"
          >
            <p className="font-display text-lg font-bold text-primary">{item.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <CtaButton>Quero acessar agora →</CtaButton>
      </div>
    </Section>
  );
}


export function SecondaryCarousel() {
  return (
    <section aria-label="Demonstração do material" className="bg-sand px-4 py-10">
      <div className="mx-auto flex max-w-6xl snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        {CAROUSEL_IMAGES.map((label) => (
          <ImagePlaceholder
            key={label}
            label={label}
            ratio="aspect-[3/4]"
            className="w-52 shrink-0 snap-center border-sand-foreground/25 bg-background/70"
          />
        ))}
      </div>
    </section>
  );
}
