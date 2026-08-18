import { Instagram } from "lucide-react";
import { Section } from "./CtaButton";
import a02 from "@/assets/amostras/amostra-02.jpg";
import a05 from "@/assets/amostras/amostra-05.jpg";
import a08 from "@/assets/amostras/amostra-08.jpg";

/** Instagram handle used across the section. */
const HANDLE = "@atlasdoparasita";
const PROFILE_URL = "https://instagram.com/atlasdoparasita";

const STATS: ReadonlyArray<{ value: string; label: string }> = [
  { value: "+100", label: "Parasitas" },
  { value: "28 mil", label: "Pecuaristas" },
  { value: "15+", label: "Anos exp." },
];

const POSTS: ReadonlyArray<{ src: string; alt: string; caption: string }> = [
  { src: a02, alt: "Post sobre identificação de carrapato no rebanho", caption: "Como identificar carrapato no couro" },
  { src: a05, alt: "Post sobre sinais de verminose no bovino", caption: "Sinais de verminose que passam batido" },
  { src: a08, alt: "Post sobre manejo sanitário do rebanho", caption: "Manejo sanitário sem desperdício" },
];

export function InstagramSection() {
  return (
    <Section className="bg-earth-gradient text-earth-foreground">
      <div className="flex flex-col items-center text-center">
        <span className="rounded-full border border-earth-foreground/30 bg-earth-foreground/10 px-4 py-1.5 font-display text-xs font-bold tracking-[0.2em] uppercase">
          Acompanhe de perto
        </span>

        <h2 className="mt-6 text-3xl font-bold text-balance uppercase sm:text-4xl lg:text-[2.75rem]">
          Nos siga no Instagram e veja o{" "}
          <span className="text-cta-lime">Atlas em ação</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-pretty opacity-85 sm:text-base">
          Dicas de manejo sanitário, casos reais do curral e conteúdo exclusivo toda semana. Ficou
          com dúvida? É só chamar por lá.
        </p>
      </div>

      <div className="mx-auto mt-10 w-full max-w-3xl rounded-2xl border border-earth-foreground/20 bg-earth-foreground/5 p-6 sm:p-8">
        <div className="flex flex-col items-center text-center">
          <span className="flex size-16 items-center justify-center rounded-full border-2 border-cta-lime bg-earth-foreground/10">
            <Instagram aria-hidden="true" className="size-7" />
          </span>
          <h3 className="mt-4 text-xl font-bold">Atlas Visual de Parasitas</h3>
          <p className="text-sm opacity-70">{HANDLE}</p>
          <ul className="mt-3 space-y-1 text-xs opacity-90 sm:text-sm">
            <li>✅ Identificação de parasitas do jeito certo</li>
            <li>🌿 +100 parasitas ilustrados por sintoma</li>
          </ul>
        </div>

        <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-earth-foreground/20 py-5 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-lg font-bold text-cta-lime sm:text-xl">
                {stat.value}
              </dd>
              <span className="text-[0.65rem] tracking-[0.15em] uppercase opacity-70 sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {POSTS.map((post) => (
            <figure
              key={post.src}
              className="overflow-hidden rounded-xl border border-earth-foreground/20 bg-earth-foreground/10"
            >
              <img
                src={post.src}
                alt={post.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="px-2 py-2 text-[0.6rem] leading-snug opacity-80 sm:text-xs">
                {post.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pulse mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-cta-lime px-6 py-3.5 font-display text-sm font-bold tracking-wide text-cta-lime-foreground uppercase transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:text-base"
        >
          <Instagram aria-hidden="true" className="size-5" />
          Ver {HANDLE} no Instagram
        </a>

        <p className="mt-3 text-center text-xs opacity-70">
          Ficou com dúvida? Fale com a gente direto no perfil ✓
        </p>
      </div>

      <p className="mt-8 text-center text-[0.65rem] tracking-[0.15em] uppercase opacity-60 sm:text-xs">
        Conteúdo novo toda semana • Casos reais do curral • Sem enrolação
      </p>
    </Section>
  );
}
