import Link from "next/link";
import { buttonSizes, buttonStyles } from "@/styles/styles";
import { cn } from "@/utils/cn";

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "default",
  className = "",
}) {
  const classes = cn(
    buttonStyles.base,
    buttonStyles[variant],
    buttonSizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}