import { cn } from "@/lib/utils";
import { TickFrame } from "@/components/zipp/Hud";

type PhoneFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  dark?: boolean;
  label?: string;
};

export function PhoneFrame({ src, alt, className, priority = false, dark = false, label }: PhoneFrameProps) {
  return (
    <figure className={cn("relative mx-auto w-full min-w-0 max-w-[260px]", className)}>
      <TickFrame dark={dark} label={label}>
          <div className="relative overflow-hidden rounded-[1.35rem] border-[6px] border-zipp-navy bg-zipp-navy shadow-soft">
          <img
            src={src}
            alt={alt}
            width={390}
            height={844}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="block h-auto w-full"
          />
        </div>
      </TickFrame>
    </figure>
  );
}
