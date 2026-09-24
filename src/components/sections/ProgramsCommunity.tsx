import Image from "next/image";
import Link from "next/link";

import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { programsCommunityData } from "@/data/programs";

const mentorship = {
  category: "Conhecimento & Desenvolvimento",
  title: "Palestras, educação e desenvolvimento profissional",
  description:
    "Uma frente de atuação dedicada ao compartilhamento de experiências, à formação de profissionais e à conexão entre tecnologia, dados, liderança, produtividade e desenvolvimento humano.",
  highlights: [
    "Palestras e eventos",
    "Educação corporativa",
    "Desenvolvimento de lideranças",
    "Mentoria e carreira",
  ],
} as const;

export default function ProgramsCommunity() {
  const { mainProgram } = programsCommunityData;

  return (
    <Section id="programas" className="bg-site">
      <SectionTitle
        eyebrow={programsCommunityData.eyebrow}
        title={programsCommunityData.title}
        description={programsCommunityData.description}
        align="center"
      />

      <div className="mt-12 grid items-start gap-6 lg:grid-cols-[1.45fr_1fr]">
        <article className="overflow-hidden rounded-2xl border border-site bg-surface">
          <div className="grid lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="relative aspect-[4/5] bg-primary sm:aspect-[16/10] lg:aspect-auto">
              <Image
                src={mainProgram.image}
                alt="Camila Timóteo Vieira sentada, segurando um livro"
                width={720}
                height={640}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="h-full w-full object-cover object-top lg:h-auto lg:object-center"
              />
            </div>

            <div className="flex flex-col p-7 sm:p-8 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                {mainProgram.category}
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-primary">
                {mainProgram.title}
              </h3>

              <p className="mt-6 leading-7 text-muted-site">
                {mainProgram.description}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {mainProgram.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3 text-[0.95rem] font-medium leading-6 text-site">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-secondary)]" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <Link
                  href={mainProgram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir Método Ganhando o Tempo"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
                >
                  {mainProgram.cta}
                </Link>
              </div>
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-site bg-surface p-8 sm:p-9 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            {mentorship.category}
          </p>

          <h3 className="mt-5 text-2xl font-bold leading-8 text-primary">
            {mentorship.title}
          </h3>

          <p className="mt-5 leading-7 text-muted-site">
            {mentorship.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {mentorship.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3 text-sm font-medium leading-6 text-site">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-secondary)]" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
}
