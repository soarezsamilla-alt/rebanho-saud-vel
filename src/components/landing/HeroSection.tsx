import { useState, useEffect } from "react";
import { Clock, ShieldCheck } from "lucide-react";
import { CtaButton } from "./CtaButton";
import heroMockup from "@/assets/hero-mockup-new.png";


function getTomorrowDate(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

/** Sticky urgency bar + security seal. */
export function TopBar() {
  const [offerDate, setOfferDate] = useState<string>("");

  useEffect(() => {
    setOfferDate(getTomorrowDate());
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-urgency text-urgency-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 px-4 py-2 text-center sm:flex-row sm:text-left">
        <p className="flex items-center gap-1.5 font-display text-xs font-bold tracking-[0.12em] uppercase sm:text-sm">
          <Clock className="size-3.5 shrink-0" aria-hidden="true" />
          Última chance — oferta termina em {offerDate || "breve"}
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <header className="bg-hero-gradient px-4 py-14 text-primary-foreground sm:py-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <span className="shield-pulse inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 font-display text-xs font-semibold tracking-[0.2em] uppercase">
          <ShieldCheck className="size-4 shrink-0" aria-hidden="true" />
          Compra 100% protegida
        </span>

        <h1 className="mt-6 text-4xl leading-[1.05] font-bold text-balance uppercase sm:text-5xl lg:text-6xl">
          +100 Parasitas do Rebanho Identificados em Segundos, Direto no Curral
        </h1>

        <p className="mt-5 max-w-2xl text-base text-pretty opacity-90 sm:text-lg">
          Identifique em segundos qual parasita está por trás da perda de peso do seu gado, receba
          +100 sinais organizados por sintoma, prontos pra consulta.
        </p>

        <img
          src={heroMockup}
          alt="Mockup principal do Atlas Visual de Parasitas do Rebanho — capa do material"
          width={700}
          height={700}
          className="mt-9 w-full max-w-lg scale-105 pulse-glow sm:max-w-xl lg:max-w-2xl"
          loading="eager"
          decoding="async"
        />

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
