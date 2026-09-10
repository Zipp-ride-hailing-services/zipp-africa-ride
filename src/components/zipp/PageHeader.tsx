import { Eyebrow } from "@/components/zipp/Section";
import { DarkField } from "@/components/zipp/DarkField";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-zipp-ink pt-24 pb-10 text-white sm:pt-40 sm:pb-16">
      <DarkField />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Eyebrow dark>{eyebrow}</Eyebrow>
          <span className="hidden font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase sm:inline">
            04.9757°N / 008.3417°E · CALABAR
          </span>
        </div>
        <h1 className="mt-4 max-w-3xl text-[2rem] font-semibold leading-[1.12] tracking-tight text-white sm:mt-5 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && <p className="mt-4 max-w-2xl text-base text-white/60 sm:mt-5 sm:text-lg">{description}</p>}
      </div>
    </div>
  );
}
