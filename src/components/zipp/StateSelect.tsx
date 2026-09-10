import { DEFAULT_WAITLIST_STATE, NIGERIA_STATES } from "@/lib/nigeria";
import { cn } from "@/lib/utils";

type StateSelectProps = {
  name?: string;
  defaultValue?: string;
  className?: string;
};

export function StateSelect({
  name = "state",
  defaultValue = DEFAULT_WAITLIST_STATE,
  className,
}: StateSelectProps) {
  return (
    <select name={name} defaultValue={defaultValue} aria-label="State" className={cn(className)}>
      {NIGERIA_STATES.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
}
