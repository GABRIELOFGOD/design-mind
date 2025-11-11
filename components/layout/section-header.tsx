import { cn } from "@/lib/utils";

interface SectionHeaderType {
  title: string;
  sub?: string;
  className?: string;
}

const SectionHeader = ({ title, sub, className }: SectionHeaderType) => {
  return (
    <div className={cn("flex flex-col gap-3 text-center", className)}>
      <p className="font-bold text-3xl md:text-4xl">{title}</p>
      <p className="text-lg text-foreground/70 font-medium">{sub}</p>
    </div>
  )
}
export default SectionHeader;