import { CtaButton, Section, SectionTitle } from "./CtaButton";
import heroMockup from "@/assets/hero-mockup-new.png";
import painVerminose from "@/assets/pain/verminose.jpg";
import painCarrapato from "@/assets/pain/carrapato.jpg";
import painMosca from "@/assets/pain/mosca.jpg";
import painBerne from "@/assets/pain/berne.jpg";
import painBicheira from "@/assets/pain/bicheira.jpg";
import painSarna from "@/assets/pain/sarna.jpg";
import painPiolho from "@/assets/pain/piolho.jpg";
import painMiiase from "@/assets/pain/miiase.jpg";

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

const VALUE_CARDS: ReadonlyArray<FeatureCard> = [
  {
    icon: "📚",
    title: "Parasitas Organizados por Sintoma",
    description: "Encontre rapidamente o parasita responsável por cada sinal no seu rebanho.",
  },
  {
    icon: "🧠",
    title: "Método IVR™",
    description: "Sistema estruturado para identificação visual rápida, direto no curral.",
  },
  {
    icon: "🗺️",
    title: "Material Ilustrado",
    description: "Visualize rapidamente cada parasita e o sinal correspondente no animal.",
  },
  {
    icon: "⚡",
    title: "Consulta Rápida",
    description: "Tenha uma referência prática sempre disponível durante a inspeção do rebanho.",
  },
  {
    icon: "✔",
    title: "Organize em um único lugar",
    description: "Pare de procurar informação espalhada em vários vídeos e sites diferentes.",
  },
  {
    icon: "💪",
    title: "Aja com mais confiança",
    description: "Reduza dúvidas na hora de decidir se chama o veterinário ou resolve na hora.",
  },
];

const IDEAL_CARDS: ReadonlyArray<FeatureCard> = [
  {
    icon: "📚",
    title: "Organizar a identificação de parasitas em um único lugar",
    description: "Tenha uma referência visual prática sempre disponível na fazenda.",
  },
  {
    icon: "⚡",
    title: "Identificar rapidamente durante a inspeção do rebanho",
    description: "Encontre o parasita certo por sintoma, sem perder tempo pesquisando.",
  },
  {
    icon: "🧠",
    title: "Reduzir dúvidas na hora de agir",
    description: "Use o material ilustrado como apoio para a decisão de manejo.",
  },
  {
    icon: "⏱️",
    title: "Economizar tempo de inspeção",
    description: "Tudo estruturado para apoiar sua rotina no curral.",
  },
  {
    icon: "💪",
    title: "Agir com mais confiança",
    description: "Tenha critérios organizados para consultar antes de qualquer decisão.",
  },
  {
    icon: "🌿",
    title: "Reduzir prejuízo com mais tranquilidade",
    description: "Material digital desenvolvido para uso prático no dia a dia da fazenda.",
  },
];

const PAIN_IMAGES: ReadonlyArray<{ src: string; alt: string }> = [
  { src: painVerminose, alt: "Bovino magro com sinais de verminose" },
  { src: painCarrapato, alt: "Infestação de carrapatos no couro do bovino" },
  { src: painMosca, alt: "Mosca-dos-chifres sobre o dorso do bovino" },
  { src: painBerne, alt: "Nódulos de berne na pele do bovino" },
  { src: painBicheira, alt: "Ferida com bicheira sendo examinada por veterinário" },
  { src: painSarna, alt: "Lesões de sarna com perda de pelo no bovino" },
  { src: painPiolho, alt: "Piolhos bovinos entre os pelos do animal" },
  { src: painMiiase, alt: "Miiase ocular em bovino sendo examinada por veterinário" },
];

const DELIVERABLES = [
  "+100 Parasitas do Rebanho Identificados",
  "Método IVR™",
  "Sinais visuais ilustrados por parasita",
  "Época de maior risco por região",
  "Ação recomendada por caso",
  "Guia de consulta rápida",
] as const;

const DELIVERABLE_TAGS = [
  "Carrapato",
  "Verminose",
  "Mosca-dos-chifres",
  "Berne",
  "Bicheira",
  "Sarna",
] as const;

function CardGrid({ cards }: { cards: ReadonlyArray<FeatureCard> }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <article
          key={card.title}
          className="rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-transform duration-200 hover:-translate-y-1"
        >
          <span aria-hidden="true" className="text-3xl">
            {card.icon}
          </span>
          <h3 className="mt-3 text-xl font-bold text-primary">{card.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
        </article>
      ))}
    </div>
  );
}

export function ValueSection() {
  return (
    <Section className="bg-secondary/60">
      <SectionTitle>
        O que torna o Atlas Visual de Parasitas do Rebanho tão valioso?
      </SectionTitle>
      <CardGrid cards={VALUE_CARDS} />
    </Section>
  );
}

export function PainSection() {
  return (
    <Section className="bg-earth-gradient text-earth-foreground">
      <SectionTitle>
        A maioria dos pecuaristas já convive com o problema — falta identificação rápida
      </SectionTitle>
      <p className="mx-auto mt-5 max-w-3xl text-center text-base text-pretty opacity-90 sm:text-lg">
        Pare de perder peso e produção sem saber a causa. Tenha uma biblioteca visual organizada
        para identificar o parasita certo antes que o prejuízo cresça.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
        {PAIN_IMAGES.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-xl border border-earth-foreground/30 bg-earth-foreground/10"
          >
            <img
              src={image.src}
              alt={image.alt}
              width={816}
              height={816}
              loading="lazy"
              decoding="async"
              className="aspect-square h-full w-full object-cover"
            />
          </figure>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <CtaButton>Quero acessar agora →</CtaButton>
      </div>
    </Section>
  );
}

export function IdealForSection() {
  return (
    <Section className="bg-background">
      <SectionTitle>Ideal para você que deseja:</SectionTitle>
      <CardGrid cards={IDEAL_CARDS} />
    </Section>
  );
}

export function DeliverablesSection() {
  return (
    <Section className="bg-secondary/60">
      <SectionTitle>Tudo o que você vai receber</SectionTitle>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        <img
          src={heroMockup}
          alt="Mockup principal do Atlas Visual de Parasitas do Rebanho — tudo o que você vai receber"
          width={700}
          height={700}
          className="mx-auto w-full max-w-md scale-105 pulse-glow"
          loading="lazy"
          decoding="async"
        />

        <div>
          <span className="inline-block rounded-full bg-primary px-4 py-1.5 font-display text-sm font-bold tracking-[0.2em] text-primary-foreground uppercase">
            Acesso imediato
          </span>

          <ul className="mt-5 space-y-3">
            {DELIVERABLES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold sm:text-base"
              >
                <span aria-hidden="true" className="text-primary">
                  ✅
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {DELIVERABLE_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground sm:text-sm"
              >
                ✅ {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
