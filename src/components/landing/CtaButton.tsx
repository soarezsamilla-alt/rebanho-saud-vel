import { cn } from "@/lib/utils";

export interface CtaButtonProps extends React.ComponentProps<"a"> {
  /** Visual weight of the call to action. */
  size?: "default" | "lg";
}

/** Primary sales CTA. Anchors to the pricing section unless an href is given. */
export function CtaButton({
  size = "default",
  className,
  href = "#planos",
  children,
  ...props
}: CtaButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex w-full max-w-md items-center justify-center rounded-full font-display font-bold tracking-wide uppercase",
        "bg-cta text-cta-foreground shadow-[var(--shadow-cta)] transition-transform duration-200",
        "hover:-translate-y-0.5 hover:brightness-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        size === "lg" ? "px-8 py-4 text-lg sm:text-xl" : "px-6 py-3.5 text-base sm:text-lg",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export interface SectionProps extends React.ComponentProps<"section"> {
  children: React.ReactNode;
}

/** Standard vertical rhythm wrapper for every landing section. */
export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("px-4 py-14 sm:py-20", className)} {...props}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export interface SectionTitleProps extends React.ComponentProps<"h2"> {
  children: React.ReactNode;
}

export function SectionTitle({ className, children, ...props }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-center text-3xl font-bold text-balance uppercase sm:text-4xl lg:text-[2.75rem]",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
