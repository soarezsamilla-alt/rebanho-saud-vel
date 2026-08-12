"use client";

import { useState, useEffect } from "react";
import { UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialProofItem {
  name: string;
  city: string;
  state: string;
  time: string;
}

const SOCIAL_PROOFS: ReadonlyArray<SocialProofItem> = [
  { name: "João Carlos", city: "Uberaba", state: "MG", time: "há 2 minutos" },
  { name: "Maria Fernanda", city: "Campo Grande", state: "MS", time: "há 4 minutos" },
  { name: "Antônio Silva", city: "Goiânia", state: "GO", time: "há 6 minutos" },
  { name: "Pedro Henrique", city: "Ribeirão Preto", state: "SP", time: "há 8 minutos" },
  { name: "Luciana Mendes", city: "Passo Fundo", state: "RS", time: "há 11 minutos" },
  { name: "Roberto Dias", city: "São José do Rio Preto", state: "SP", time: "há 14 minutos" },
  { name: "Fernanda Costa", city: "Presidente Prudente", state: "SP", time: "há 17 minutos" },
  { name: "Carlos Eduardo", city: "Dourados", state: "MS", time: "há 21 minutos" },
  { name: "Aline Ribeiro", city: "Barretos", state: "SP", time: "há 25 minutos" },
  { name: "Marcelo Souza", city: "Araguaína", state: "TO", time: "há 32 minutos" },
  { name: "Juliana Martins", city: "Sinop", state: "MT", time: "há 38 minutos" },
  { name: "Ricardo Almeida", city: "Juína", state: "MT", time: "há 45 minutos" },
];

const DISPLAY_MS = 4500;
const INTERVAL_MS = 5500;

export function SocialProofPopup() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const showTimeout = setTimeout(() => setVisible(true), 1200);

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % SOCIAL_PROOFS.length);
        setVisible(true);
      }, 500);
    }, INTERVAL_MS);

    return () => {
      clearTimeout(showTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!mounted) return null;

  const current = SOCIAL_PROOFS[index] ?? SOCIAL_PROOFS[0];

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "fixed bottom-4 left-4 z-50 max-w-[260px] sm:max-w-[280px]",
        "rounded-xl border border-border/60 bg-card/95 p-3 shadow-lg backdrop-blur-sm",
        "transition-all duration-500 ease-out",
        visible
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0 pointer-events-none"
      )}
    >
      <div className="flex items-start gap-2.5">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-urgency/10 text-urgency">
          <UserCheck className="size-4" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold leading-snug text-foreground">
            <span className="text-urgency">{current.name}</span> de{" "}
            <span className="text-urgency">{current.city}, {current.state}</span>
          </p>
          <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
            Adquiriu o <span className="font-semibold text-foreground">Plano Completo</span>{" "}
            {current.time}
          </p>
        </div>
      </div>
    </div>
  );
}
