import AchievementCard from "@/components/cards/AchievementCard";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { achievementsData } from "@/data/achievements";

export default function Achievements() {
  return (
    <Section id="conquistas" className="bg-slate-50">
      <SectionTitle
        eyebrow={achievementsData.eyebrow}
        title={achievementsData.title}
        description={achievementsData.description}
        align="center"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievementsData.items.map((item) => (
          <AchievementCard
            key={item.title}
            title={item.title}
            institution={item.institution}
            date={item.date}
            category={item.category}
          />
        ))}
      </div>
    </Section>
  );
}