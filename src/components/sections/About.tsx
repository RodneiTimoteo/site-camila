import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { aboutData } from "@/data/about";

export default function About() {
  return (
    <Section id="sobre" className="bg-slate-50">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <SectionTitle
          eyebrow={aboutData.eyebrow}
          title={aboutData.title}
          description={aboutData.description}
        />

        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {aboutData.highlights.map((item) => (
            <article
              key={item.value}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xl font-bold text-slate-950">
                {item.value}
              </p>

              <p className="mt-2 leading-7 text-slate-600">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}