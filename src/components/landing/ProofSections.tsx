import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButton, Section, SectionTitle } from "./CtaButton";
import { ImagePlaceholder } from "./ImagePlaceholder";

const TESTIMONIALS = [
  {
    quote: "Hoje consigo identificar o problema muito mais rápido, direto no curral.",
    author: "João Marcos, Pecuarista",
  },
  {
    quote: "Finalmente organizei a identificação de parasitas em um único lugar.",
    author: "Ricardo Almeida, Produtor de Leite",
  },
  {
    quote: "Material extremamente prático para o dia a dia da fazenda.",
    author: "Fernanda Costa, Técnica Agropecuária",
  },
] as const;

const STEPS: ReadonlyArray<{ title: string; description?: string; items?: string[] }> = [
  { title: "Faça sua compra", description: "Pagamento rápido e seguro." },
  {
    title: "Receba seu acesso",
    description: "Liberação automática após a confirmação.",
    items: ["Parasitas organizados", "Materiais ilustrados", "Acesso liberado automaticamente"],
  },
  {
    title: "Baixe os materiais",
    items: [
      "+100 parasitas identificados",
      "Sinais visuais ilustrados",
      "Guia de consulta rápida",
      "Bônus complementares",
      "Tudo separado para facilitar sua consulta",
    ],
  },
  {
    title: "Consulte e utilize",
    items: [
      "Identifique o sintoma no animal",
      "Abra o parasita correspondente",
      "Use como apoio para decisão de manejo",
    ],
  },
];

const FAQ = [
  {
    q: "Preciso ser técnico ou veterinário?",
    a: "Não. O material foi desenvolvido para qualquer pecuarista, técnico ou funcionário de fazenda.",
  },
  {
    q: "Os parasitas estão completos?",
    a: "Sim. Todos foram organizados para consulta rápida e aplicação prática no curral.",
  },
  { q: "Posso acessar pelo celular?", a: "Sim. O acesso funciona em celular, tablet e computador." },
  { q: "O acesso é vitalício?", a: "Sim." },
  { q: "Recebo imediatamente?", a: "Sim. Após a confirmação do pagamento." },
  {
    q: "O material substitui avaliação veterinária?",
    a: "Não. Ele serve como apoio à identificação e à decisão de manejo.",
  },
  { q: "Como funciona a garantia?", a: "Você possui 7 dias para solicitar reembolso." },
  {
    q: "Serve para gado de corte e de leite?",
    a: "Sim. Os parasitas cobertos afetam ambos os sistemas de criação.",
  },
  {
    q: "O material é organizado por sintoma?",
    a: "Sim. Todos estão categorizados para localização rápida por sinal no animal.",
  },
  { q: "Posso imprimir os materiais?", a: "Sim. Os arquivos ficam disponíveis para download." },
] as const;

export function TestimonialsSection() {
  return (
    <Section className="bg-background">
      <SectionTitle>O que nossos clientes dizem</SectionTitle>
      <p className="mt-3 text-center text-muted-foreground">
        Depoimentos de uso prático no dia a dia da fazenda.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <figure
            key={item.author}
            className="rounded-2xl border border-border bg-card p-6 shadow-card-soft"
          >
            <p className="text-lg tracking-widest text-gold" aria-label="5 de 5 estrelas">
              ★★★★★
            </p>
            <blockquote className="mt-3 text-base text-pretty italic">“{item.quote}”</blockquote>
            <figcaption className="mt-4 font-display text-sm font-bold tracking-wide uppercase">
              — {item.author}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <CtaButton>Quero meu acesso agora →</CtaButton>
      </div>
    </Section>
  );
}

export function GuaranteeSection() {
  return (
    <Section className="bg-earth-gradient text-earth-foreground">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <ImagePlaceholder
          label="selo-garantia-7-dias"
          ratio="aspect-square"
          className="w-40 rounded-full border-earth-foreground/30 bg-earth-foreground/10 text-earth-foreground"
        />
        <SectionTitle className="mt-6">7 dias de garantia incondicional</SectionTitle>
        <p className="mt-5 text-base text-pretty opacity-90 sm:text-lg">
          Você tem 7 dias para analisar todo o material. Explore os parasitas identificados,
          consulte os sinais ilustrados e utilize o Método IVR™.
        </p>
        <p className="mt-3 text-base text-pretty opacity-90 sm:text-lg">
          Se sentir que o material não agrega valor à sua rotina na fazenda, basta solicitar o
          reembolso.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 font-display text-sm font-bold tracking-wide uppercase">
          {["Sem burocracia", "Sem perguntas", "Todo o risco é nosso"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-earth-foreground/30 bg-earth-foreground/10 px-4 py-2"
            >
              ✔ {item}
            </span>
          ))}
        </div>
        <p className="mt-7 max-w-2xl text-base text-pretty opacity-90">
          Você não está comprando uma promessa. Está adquirindo uma biblioteca visual organizada
          para consulta prática no dia a dia do rebanho.
        </p>
      </div>
    </Section>
  );
}

export function StepsSection() {
  return (
    <Section className="bg-secondary/60">
      <SectionTitle>Como funciona o acesso</SectionTitle>
      <p className="mt-3 text-center text-muted-foreground">
        Acesse, baixe e consulte sempre que precisar.
      </p>

      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-card-soft"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-primary font-display text-xl font-bold text-primary-foreground">
              {i + 1}
            </span>
            <h3 className="mt-4 text-xl font-bold text-primary">{step.title}</h3>
            {step.description ? (
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            ) : null}
            {step.items ? (
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {step.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-primary">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="mt-10 flex justify-center">
        <CtaButton>Quero meu acesso agora →</CtaButton>
      </div>
    </Section>
  );
}

export function FaqSection() {
  return (
    <Section className="bg-background">
      <SectionTitle>Perguntas frequentes</SectionTitle>
      <Accordion type="single" collapsible className="mx-auto mt-10 w-full max-w-3xl">
        {FAQ.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left font-display text-lg font-semibold">
              {i + 1}. {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground sm:text-base">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-earth px-4 py-12 text-earth-foreground">
      <div className="mx-auto max-w-3xl space-y-4 text-center text-xs leading-relaxed opacity-85 sm:text-sm">
        <p>Copyright © 2026 | Todos os direitos reservados.</p>
        <p>
          Este site não é afiliado ao Facebook™, Instagram™, Google™ ou qualquer outra plataforma
          mencionada.
        </p>
        <p>
          Todos os direitos sobre a obra “Atlas Visual de Parasitas do Rebanho” são reservados ao
          produto, nos termos da Lei nº 9.610/98 (Lei de Direitos Autorais).
        </p>
        <p>
          A reprodução não autorizada desta publicação, no todo ou em parte, por quaisquer meios,
          constitui violação dos direitos autorais (Art. 184 do Código Penal e Lei nº 9.610/98),
          sujeitando os infratores às sanções civis e criminais previstas na legislação aplicável.
        </p>
      </div>
    </footer>
  );
}
