import JourneyItem from "@/components/cards/JourneyItem";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { journeyData } from "@/data/journey";

export default function ProfessionalJourney() {
  return (
    <Section id="trajetoria" className="bg-site py-20">
      <SectionTitle
        eyebrow={journeyData.eyebrow}
        title={journeyData.title}
        description={journeyData.description}
        align="center"
      />

      <div className="relative mx-auto mt-10 max-w-7xl">
        <div className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-[var(--color-border)] lg:block" />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {journeyData.items.map((item) => {
            const isCurrent = item.organization === "Santander";

            return (
              <div key={item.title} className="relative flex flex-col gap-4">
                <div className="relative z-10 hidden h-10 items-center justify-center lg:flex">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-site bg-surface shadow-sm">
                    <span className="h-3 w-3 rounded-full bg-[var(--color-secondary)]" />
                  </span>
                </div>

                <JourneyItem {...item} isCurrent={isCurrent} />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
