import ExperienceCard from "@/components/cards/ExperienceCard";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { experienceData } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experiencia">
      <SectionTitle
        eyebrow={experienceData.eyebrow}
        title={experienceData.title}
        description={experienceData.description}
        align="center"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {experienceData.items.map((item) => (
          <ExperienceCard
            key={item.title}
            title={item.title}
            description={item.description}
            skills={item.skills}
          />
        ))}
      </div>
    </Section>
  );
}