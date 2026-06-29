import Link from "next/link";

import { siteConfig } from "@/data/site";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="#inicio"
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label={`Ir para o início do site de ${siteConfig.name}`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
        CV
      </span>

      <span>
        <span className="block font-semibold leading-tight text-inherit">
          {siteConfig.shortName}
        </span>

        <span className="hidden text-sm opacity-70 min-[380px]:block">
          Dados, Liderança e Produtividade
        </span>
      </span>
    </Link>
  );
}
