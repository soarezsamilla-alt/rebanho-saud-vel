import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImagePlaceholderProps extends React.ComponentProps<"div"> {
  /** Label shown inside the placeholder — describes the asset to be inserted later. */
  label: string;
  /** Tailwind aspect ratio class, e.g. "aspect-square". */
  ratio?: string;
}

/**
 * Neutral placeholder used wherever the copy specifies [IMAGEM: ...].
 * Replaced later by the real deliverable mockups.
 */
export function ImagePlaceholder({
  label,
  ratio = "aspect-[4/3]",
  className,
  ...props
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed border-border bg-muted/70 p-4 text-center",
        ratio,
        className,
      )}
      {...props}
    >
      <ImageIcon className="size-6 shrink-0 text-muted-foreground/70" aria-hidden="true" />
      <span className="text-[11px] leading-tight font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </span>
    </div>
  );
}
