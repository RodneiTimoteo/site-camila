import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { aboutData } from "@/data/about";
import Image from "next/image";

export default function About() {
  return (
  <Section id="sobre" className="bg-site">
    <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -bottom-5 -right-5 h-28 w-28 rounded-full bg-[var(--color-secondary)]/20 blur-2xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-site bg-surface shadow-xl">
          <div className="relative aspect-[4/5]">
            <Image
              src="/images/camila-sobre.jpeg"
              alt="Camila Timóteo Vieira trabalhando no notebook"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div>
        <SectionTitle
          eyebrow={aboutData.eyebrow}
          title={aboutData.title}
          description={aboutData.description}
        />

        <div className="mt-10 grid gap-5">
          {aboutData.highlights.map((item) => (
            <article
              key={item.value}
              className="rounded-2xl border border-site bg-surface p-6 shadow-sm"
            >
              <p className="text-xl font-bold text-primary">
                {item.value}
              </p>

              <p className="mt-2 leading-7 text-muted-site">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </Section>
);
}