import { layoutStyles } from "@/styles/styles";
import { cn } from "@/utils/cn";

const sizes = {
  page: "max-w-[1440px]",
  content: "max-w-[1240px]",
  products: "max-w-[1236px]",
  categories: "max-w-[1183px]",
  narrow: "max-w-[1058px]",
  comparison: "max-w-[1332px]",
  cart: "max-w-[1240px]",
};

export default function Container({
  children,
  size = "content",
  className = "",
}) {
  return (
    <div
      className={cn(
        layoutStyles.container,
        sizes[size] || sizes.content,
        className
      )}
    >
      {children}
    </div>
  );
}
