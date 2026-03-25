import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { externalLinkRel, isExternalHref } from "@/lib/cta-links";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  fullWidth?: boolean;
};

const variantClasses = {
  primary:
    "bg-brand text-slate-950 shadow-[0_18px_40px_-26px_rgba(38,194,173,0.95)] hover:bg-brand-dark hover:text-white",
  secondary:
    "border border-border bg-white/5 text-ink hover:border-brand/60 hover:bg-brand/10 hover:text-brand",
  ghost: "text-brand hover:text-brand/80"
};

const sizeClasses = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-4.5 py-3 text-sm",
  lg: "px-5 py-3.5 text-sm sm:text-base"
};

export function CTAButton({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  external,
  fullWidth = false
}: CTAButtonProps) {
  const isExternal = external ?? isExternalHref(href);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? externalLinkRel : undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-200",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
    >
      {children}
    </Link>
  );
}
