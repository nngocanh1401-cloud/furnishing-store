import { textStyles } from "@/styles/styles";
import { cn } from "@/utils/cn";

export default function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <div className={cn("text-center", className)}>
      <h2 className={textStyles.sectionTitle}>{title}</h2>

      {subtitle && (
        <p className="mt-1 font-['Poppins'] text-[clamp(15px,2vw,20px)] font-normal leading-[1.5] text-[#666666]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
