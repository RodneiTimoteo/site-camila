import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  Play,
} from "lucide-react";

import Logo from "@/components/common/Logo";
import Container from "@/components/layout/Container";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/social";

const socialIcons = {
  instagram: Camera,
  linkedin: BriefcaseBusiness,
  youtube: Play,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo className="text-white" />

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Navegação
            </h2>

            <nav className="mt-5 grid grid-cols-2 gap-x-7 gap-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit py-1 text-sm text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Redes sociais
            </h2>

            <div className="mt-5 grid gap-3">
              {socialLinks.map(({ name, icon, url }) => {
                const Icon = socialIcons[icon];

                return (
                  <Link
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ${name} de Camila Vieira em uma nova aba`}
                    className="group inline-flex min-h-11 w-fit items-center gap-3 rounded-xl border border-slate-800 px-3 py-2 text-sm text-slate-400 transition hover:border-slate-600 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
                  >
                    <Icon className="h-[1.125rem] w-[1.125rem] shrink-0" aria-hidden="true" />
                    <span>{name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>

          <Link
            href="https://rodesolucoes.com.br"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar site da RODE - Soluções Inteligentes"
            title="RODE - Soluções Inteligentes"
            className="group inline-flex w-fit flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 transition hover:text-secondary sm:justify-end"
          >
            <span className="text-slate-500">Desenvolvido por</span>
            <Image
              src="/images/rode-logo.png"
              alt="Logo da RODE - Soluções Inteligentes"
              width={112}
              height={40}
              sizes="112px"
              className="h-8 w-auto object-contain opacity-80 transition group-hover:opacity-100 sm:h-9"
            />
            <span className="font-semibold text-slate-300">RODE</span>
          </Link>
        </div>
      </Container>
    </footer>
  );
}
