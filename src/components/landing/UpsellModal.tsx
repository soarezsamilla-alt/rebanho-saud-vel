"use client";

import { useState, useEffect } from "react";
import { Clock, X, Zap, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CtaButton } from "./CtaButton";
import { cn } from "@/lib/utils";

const TIMER_STORAGE_KEY = "upsell-timer-deadline";
const TIMER_MINUTES = 15;

function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(Math.max(0, totalSeconds) / 60);
  const seconds = Math.max(0, totalSeconds) % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function useCountdownSeconds(open: boolean): number {
  const [secondsLeft, setSecondsLeft] = useState<number>(TIMER_MINUTES * 60);

  useEffect(() => {
    if (!open) return;

    let deadline = Number(localStorage.getItem(TIMER_STORAGE_KEY));
    const now = Date.now();
    if (!deadline || deadline <= now) {
      deadline = now + TIMER_MINUTES * 60 * 1000;
      localStorage.setItem(TIMER_STORAGE_KEY, String(deadline));
    }

    const update = () => {
      const remaining = Math.ceil((deadline - Date.now()) / 1000);
      setSecondsLeft(Math.max(0, remaining));
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [open]);

  return secondsLeft;
}

export function UpsellModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const secondsLeft = useCountdownSeconds(open);
  const isExpired = secondsLeft <= 0;

  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose()}>
      <DialogContent className="max-w-md overflow-hidden border-urgency bg-card p-0 sm:max-w-lg">
        <div className="bg-urgency px-6 py-3 text-center text-urgency-foreground">
          <p className="flex items-center justify-center gap-2 font-display text-sm font-bold tracking-[0.12em] uppercase">
            <Zap className="size-4" aria-hidden="true" />
            Oferta exclusiva
          </p>
        </div>

        <div className="px-6 pb-8 pt-5">
          <DialogHeader className="text-center">
            <DialogTitle className="text-center font-display text-2xl font-bold uppercase sm:text-3xl">
              Não perca essa chance!
            </DialogTitle>
            <DialogDescription className="mx-auto mt-2 max-w-sm text-center text-base text-muted-foreground">
              Você pode levar o Plano Completo com desconto especial agora.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 rounded-2xl border-2 border-dashed border-urgency/40 bg-urgency/5 p-5 text-center">
            <p className="font-display text-sm font-bold tracking-[0.15em] text-urgency uppercase">
              De R$ 27,90 por apenas
            </p>
            <div className="mt-1 flex items-center justify-center gap-3">
              <span className="font-display text-2xl font-bold text-muted-foreground line-through sm:text-3xl">
                R$27,90
              </span>
              <span className="font-display text-5xl font-bold text-urgency sm:text-6xl">R$19,90</span>
            </div>
            <p className="mt-2 font-display text-base font-bold text-primary sm:text-lg">
              Você economiza R$ 8,00
            </p>
          </div>

          <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
            <p className="text-base text-foreground">
              Pagando apenas{" "}
              <span className="font-display text-lg font-bold text-urgency">R$ 10,00 a mais</span>{" "}
              que o Plano Básico, você leva todo o material completo.
            </p>
          </div>

          <div
            className={cn(
              "mt-6 flex items-center justify-center gap-2 rounded-2xl border border-urgency/30 bg-urgency/10 px-5 py-3 text-center font-display text-xl font-bold tracking-wide text-urgency",
              isExpired && "opacity-60",
            )}
          >
            <Clock className="size-5" aria-hidden="true" />
            <span>Oferta expira em: {formatTime(secondsLeft)}</span>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <CtaButton
              href="#checkout-plano-completo"
              size="lg"
              className="bg-urgency text-urgency-foreground"
              onClick={onClose}
            >
              Sim, quero o Plano Completo por R$ 19,90
              <ArrowRight className="ml-2 size-5" aria-hidden="true" />
            </CtaButton>

            <button
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-4" aria-hidden="true" />
              Não, quero apenas o Plano Básico
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
