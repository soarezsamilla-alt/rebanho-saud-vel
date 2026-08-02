import { CtaButton, Section, SectionTitle } from "./CtaButton";
import { ImagePlaceholder } from "./ImagePlaceholder";

const GALLERY_IMAGES = [
  "exemplo-carrapato",
  "exemplo-verminose",
  "exemplo-mosca-dos-chifres",
  "exemplo-berne",
  "exemplo-bicheira",
  "exemplo-sarna",
  "exemplo-piolho",
  "exemplo-carrapato-2",
] as const;

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

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {GALLERY_IMAGES.map((label) => (
          <ImagePlaceholder key={label} label={label} ratio="aspect-square" />
        ))}
      </div>

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
