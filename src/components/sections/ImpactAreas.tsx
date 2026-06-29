import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { impactAreasData } from "@/data/impact";

export default function ImpactAreas() {
  return (
    <Section id="impacto" className="bg-surface">
      <SectionTitle
        eyebrow={impactAreasData.eyebrow}
        title={impactAreasData.title}
        description={impactAreasData.description}
        align="center"
      />

      <div className="mt-10 divide-y divide-site border-y border-site">
        {impactAreasData.items.map((item, index) => (
          <article
            key={item.title}
            className="grid gap-5 py-7 md:grid-cols-[0.9fr_1.1fr] md:gap-7 lg:grid-cols-[0.85fr_1.15fr_1fr] lg:items-start lg:gap-10"
          >
            <div className="grid grid-cols-[3rem_1fr] items-start gap-4 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
              <span className="block w-12 text-left text-4xl font-bold leading-none text-secondary sm:w-18 sm:text-6xl">
                {index + 1}
              </span>

              <h3 className="max-w-sm pt-0.5 text-xl font-bold leading-7 text-primary sm:pt-1 sm:text-2xl sm:leading-8">
                {item.title}
              </h3>
            </div>

            <p className="text-base leading-7 text-muted-site md:pt-1">
              {item.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 md:col-span-2 lg:col-span-1 lg:pt-2">
              {item.highlights.map((highlight, index) => (
                <span key={highlight} className="inline-flex items-center gap-3 text-sm font-semibold text-site">
                  {index > 0 && (
                    <span className="h-1 w-1 rounded-full bg-[var(--color-secondary)]" aria-hidden="true" />
                  )}
                  {highlight}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
