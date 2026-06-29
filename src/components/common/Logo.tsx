import Link from "next/link";

import { siteConfig } from "@/data/site";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="#inicio"
      className={`inline-flex min-w-0 items-center gap-3.5 ${className}`}
      aria-label={`Ir para o início do site de ${siteConfig.name}`}
    >
      <span className="flex h-12 w-14 shrink-0 items-center justify-center rounded-xl bg-primary font-[var(--font-playfair-display)] text-[1.05rem] font-bold leading-none tracking-[0.06em] text-white">
        CTV
      </span>

      <span className="min-w-0">
        <span className="block text-[1.05rem] font-semibold leading-tight text-inherit sm:text-lg">
          {siteConfig.name}
        </span>

        <span className="mt-0.5 hidden text-[0.85rem] font-medium leading-tight opacity-75 min-[380px]:block sm:text-sm">
          Dados, Liderança e Produtividade
        </span>
      </span>
    </Link>
  );
}
