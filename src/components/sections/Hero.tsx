import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export default function Hero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-site py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(176,141,87,0.16),transparent_32%)]" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                {eyebrow}
              </p>
            )}

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-site">
              {description}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href={primaryAction.href}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
              >
                {primaryAction.label}
              </Link>

              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-site bg-surface px-6 py-3 text-sm font-semibold text-primary transition hover:border-[var(--color-primary)]"
                >
                  {secondaryAction.label}
                </Link>
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[var(--color-secondary)]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-surface p-3 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[var(--color-background)]">
                <Image
                  src="/images/camila-hero.jpeg"
                  alt="Camila Timóteo Vieira"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-site bg-surface px-5 py-4 shadow-lg sm:block">
              <p className="text-sm font-semibold text-primary">
                Dados • Liderança • Produtividade
              </p>

              <p className="mt-1 text-xs text-muted-site">
                Experiência transformada em impacto
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}