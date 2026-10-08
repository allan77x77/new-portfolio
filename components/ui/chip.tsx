import { cn } from "@/lib/utils";

interface ChipProps {
  content: string;
  className?: string;
}

export default function Chip({ content, className }: ChipProps) {
  return (
    <div
      className={cn(
        "center relative inline-block select-none whitespace-nowrap rounded-md py-1 px-2 sm:py-2 sm:px-3 align-baseline font-sans text-[10px] sm:text-xs font-bold leading-none text-primary border border-border bg-background",
        className
      )}
    >
      {content}
    </div>
  );
}
