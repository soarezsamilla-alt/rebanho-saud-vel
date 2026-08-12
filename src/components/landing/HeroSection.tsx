import { ShieldCheck, Clock } from "lucide-react";
import { CtaButton } from "./CtaButton";
import heroMockup from "@/assets/hero-mockup-new.png.asset.json";

/** Sticky urgency bar + security seal. */
export function TopBar() {
  return (
    <div className="sticky top-0 z-50 bg-urgency text-urgency-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-1 px-4 py-2 text-center sm:flex-row sm:text-left">
        <p className="flex items-center gap-2 font-display text-sm font-bold tracking-[0.12em] uppercase sm:text-base">
          <Clock className="size-4 shrink-0" aria-hidden="true" />
          Última chance — oferta termina hoje
        </p>
        <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] uppercase opacity-90 sm:text-xs">
          <ShieldCheck className="size-4 shrink-0" aria-hidden="true" />
          Compra 100% segura e protegida
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header className="bg-hero-gradient px-4 py-14 text-primary-foreground sm:py-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <span className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 font-display text-xs font-semibold tracking-[0.35em] uppercase">
          — Pecuária —
        </span>

        <h1 className="mt-6 text-4xl leading-[1.05] font-bold text-balance uppercase sm:text-5xl lg:text-6xl">
          Atlas Visual de Parasitas do Rebanho
        </h1>

        <p className="mt-5 max-w-2xl text-base text-pretty opacity-90 sm:text-lg">
          Tenha em mãos +100 Parasitas do Rebanho organizados por sintoma para identificar em
          segundos, direto no curral.
        </p>

        <img
          src={heroMockup.url}
          alt="Mockup principal do Atlas Visual de Parasitas do Rebanho — capa do material"
          width={700}
          height={700}
          className="mt-9 w-full max-w-lg scale-105 pulse-glow sm:max-w-xl lg:max-w-2xl"
          loading="eager"
          decoding="async"
        />

        <p className="mt-8 max-w-2xl text-sm text-pretty opacity-85 sm:text-base">
          Utilize o Método IVR™ (Identificação Visual Rápida) e tenha acesso a uma biblioteca visual
          prática para identificar rapidamente o parasita responsável pela perda de peso, queda de
          produção ou queda de imunidade do seu rebanho.
        </p>

        <div className="mt-8 flex w-full justify-center">
          <CtaButton size="lg">QUERO MEU PROJETO POR R$ 9,90</CtaButton>
        </div>

        <p className="mt-4 max-w-xl text-xs opacity-80 sm:text-sm">
          Você recebe acesso imediato após a compra para consultar pelo celular, tablet ou
          computador, direto na fazenda.
        </p>
      </div>
    </header>
  );
}
