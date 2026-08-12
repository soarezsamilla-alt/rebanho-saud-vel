import { useState } from "react";
import { Check, Gift, ShieldCheck, Zap } from "lucide-react";
import heroMockup from "@/assets/hero-mockup-new.png.asset.json";
import basicMockup from "@/assets/mockup-plano-basico.png.asset.json";
import bonusCalendarioMockup from "@/assets/bonus-calendario-vermifugacao.png.asset.json";
import bonusCarrapatoMockup from "@/assets/bonus-guia-carrapato.png.asset.json";
import { CtaButton, Section, SectionTitle } from "./CtaButton";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { UpsellModal } from "./UpsellModal";


interface Bonus {
  index: string;
  title: string;
  image: string;
  description: string;
  value: string;
}

const BONUSES: ReadonlyArray<Bonus> = [
  {
    index: "Bônus #1",
    title: "Calendário de Vermifugação Estratégica",
    image: "bonus-calendario-vermifugacao",
    description: "Saiba quando tratar, não só como identificar.",
    value: "Valor: R$27",
  },
  {
    index: "Bônus #2",
    title: "Guia de Controle de Carrapato",
    image: "bonus-guia-carrapato",
    description:
      "Protocolo completo contra a principal ameaça sanitária apontada pelos pecuaristas.",
    value: "Valor: R$27",
  },
  {
    index: "Bônus #3",
    title: "Checklist de Inspeção Mensal do Rebanho",
    image: "bonus-checklist-inspecao",
    description: "Rotina simples para pegar o problema antes que ele vire prejuízo grande.",
    value: "Valor: R$27",
  },
  {
    index: "Bônus #4",
    title: "Mapa de Risco Sazonal por Região",
    image: "bonus-mapa-risco-sazonal",
    description: "Saiba qual parasita ataca mais em cada época do ano na sua região.",
    value: "Valor: R$37",
  },
];

const BASIC_FEATURES = [
  "+100 Parasitas do Rebanho Identificados",
  "Método IVR™",
  "Acesso vitalício",
  "Download imediato",
] as const;

const COMPLETE_FEATURES = [
  "+100 Parasitas do Rebanho Identificados",
  "Método IVR™",
  "Sinais visuais ilustrados por parasita",
  "Época de maior risco por região",
  "Ação recomendada por caso",
  "Guia de consulta rápida",
  "Bônus #1 Calendário de Vermifugação Estratégica",
  "Bônus #2 Guia de Controle de Carrapato",
  "Bônus #3 Checklist de Inspeção Mensal do Rebanho",
  "Bônus #4 Mapa de Risco Sazonal por Região",
] as const;

export function BonusSection() {
  return (
    <Section className="bg-background">
      <SectionTitle>E Não Para Por Aí… Você Também Vai Receber Bônus Exclusivos</SectionTitle>
      <p className="mt-4 text-center font-display text-xl font-bold tracking-[0.2em] text-urgency uppercase">
        4 Bônus Exclusivos
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {BONUSES.map((bonus) => (
          <article
            key={bonus.index}
            className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-card-soft"
          >
            <p className="font-display text-sm font-bold tracking-[0.15em] text-urgency uppercase">
              🎁 {bonus.index}
            </p>
            <h3 className="mt-1 text-lg font-bold text-primary">{bonus.title}</h3>
            {bonus.image === "bonus-calendario-vermifugacao" ? (
              <img
                src={bonusCalendarioMockup.url}
                alt={bonus.title}
                width={400}
                height={300}
                loading="lazy"
                className="mt-4 w-full rounded-xl object-cover aspect-[4/3]"
              />
            ) : bonus.image === "bonus-guia-carrapato" ? (
              <img
                src={bonusCarrapatoMockup.url}
                alt={bonus.title}
                width={400}
                height={300}
                loading="lazy"
                className="mt-4 w-full rounded-xl object-cover aspect-[4/3]"
              />
            ) : (
              <ImagePlaceholder label={bonus.image} ratio="aspect-[4/3]" className="mt-4" />
            )}
            <p className="mt-4 flex-1 text-sm text-muted-foreground">{bonus.description}</p>
            <p className="mt-4 font-display text-base font-bold">
              <span className="text-muted-foreground line-through">{bonus.value}</span>{" "}
              <span className="text-primary uppercase">Grátis</span>
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function FeatureList({ items }: { items: ReadonlyArray<string> }) {
  return (
    <ul className="mt-6 space-y-2.5 text-left">
      {items.map((item) => {
        const isBonus = item.startsWith("Bônus");
        return (
          <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base">
            {isBonus ? (
              <Gift className="mt-0.5 size-4 shrink-0 text-urgency" aria-hidden="true" />
            ) : (
              <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            )}
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}

export function PlansSection() {
  const [upsellOpen, setUpsellOpen] = useState(false);

  return (
    <Section id="planos" className="scroll-mt-16 bg-secondary/60">
      <p className="text-center font-display text-lg font-bold tracking-[0.15em] text-urgency uppercase">
        Última chance — oferta termina hoje
      </p>
      <SectionTitle className="mt-3">Escolha a opção ideal para você:</SectionTitle>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
        <article className="rounded-3xl border border-border bg-card p-7 shadow-card-soft">
          <h3 className="text-center font-display text-2xl font-bold tracking-wide uppercase">Plano Básico</h3>
          <p className="mt-2 text-center font-display text-lg font-semibold text-primary">
            Atlas Visual de Parasitas do Rebanho
          </p>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Para quem deseja começar a identificar os parasitas de forma prática e organizada.
          </p>

          <img
            src={basicMockup.url}
            alt="Mockup do Plano Básico"
            width={700}
            height={700}
            loading="lazy"
            className="pulse-glow mx-auto mt-5 w-full max-w-sm rounded-2xl"
          />

          <FeatureList items={BASIC_FEATURES} />

          <div className="mt-7 rounded-2xl bg-muted p-5 text-center">
            <p className="text-sm text-muted-foreground">
              De <span className="line-through">R$47,90</span> por apenas:
            </p>
            <p className="font-display text-5xl font-bold text-primary">R$9,90</p>
            <p className="mt-1 text-sm text-muted-foreground">(ou 3x de R$3,50)</p>
          </div>

          <div className="mt-6 flex justify-center">
            <CtaButton
              onClick={() => setUpsellOpen(true)}
              className="bg-cta-lime text-cta-lime-foreground"
            >
              Quero acessar agora →
            </CtaButton>
          </div>
        </article>

        <article className="relative rounded-3xl border-2 border-primary bg-card p-7 shadow-plan-hero">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-urgency px-4 py-1.5 text-center font-display text-[11px] font-bold tracking-[0.12em] text-urgency-foreground uppercase sm:text-xs">
            <Zap className="inline-block size-3.5 align-text-bottom" aria-hidden="true" />
            <span className="ml-1">MAIS VENDIDO</span>
          </div>

          <h3 className="mt-3 text-center font-display text-2xl font-bold tracking-wide uppercase">
            Plano Completo
          </h3>
          <p className="mt-2 text-center font-display text-lg font-semibold text-primary">
            Biblioteca Visual Completa de Parasitas do Rebanho
          </p>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            A opção mais indicada para quem quer todos os recursos e bônus para reduzir prejuízo o
            ano inteiro.
          </p>

          <img
            src={heroMockup.url}
            alt="Mockup do Plano Completo"
            width={700}
            height={700}
            loading="lazy"
            className="pulse-glow mx-auto mt-5 w-full max-w-sm rounded-2xl"
          />

          <FeatureList items={COMPLETE_FEATURES} />

          <div className="mt-7 rounded-2xl bg-primary p-5 text-center text-primary-foreground">
            <p className="text-sm opacity-85">
              De <span className="line-through">R$197,90</span> por apenas:
            </p>
            <p className="font-display text-5xl font-bold">R$27,90</p>
            <p className="mt-1 text-sm opacity-85">(ou 6x de R$4,65)</p>
          </div>

          <div className="mt-6 flex justify-center">
            <CtaButton href="#checkout-plano-completo" size="lg">
              Quero acessar agora →
            </CtaButton>
          </div>
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-semibold text-primary">
            <ShieldCheck className="h-4 w-4" />
            7 dias de garantia incondicional
          </p>
        </article>
      </div>

      <UpsellModal open={upsellOpen} onClose={() => setUpsellOpen(false)} />

      <p className="mx-auto mt-10 max-w-3xl text-center text-base text-pretty text-muted-foreground sm:text-lg">
        Um único parasita identificado a tempo pode economizar quilos de peso e litros de leite no
        seu rebanho. Agora imagine ter acesso a mais de 100 parasitas organizados e disponíveis para
        consulta sempre que precisar.
      </p>
    </Section>
  );
}
