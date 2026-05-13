import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide transition-all duration-300 transform rounded-sm text-sm uppercase";
  
  const variants = {
    primary: "bg-gold text-black hover:bg-[#E5AA3A] hover:shadow-[0_0_15px_rgba(210,155,45,0.4)] hover:-translate-y-1",
    secondary: "bg-transparent border border-gold text-white hover:bg-gold/10 hover:shadow-[0_0_15px_rgba(210,155,45,0.2)] hover:-translate-y-1",
    ghost: "bg-transparent text-gold hover:underline underline-offset-4",
  };

  const combinedStyles = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
