import { Award, Lightbulb, Mic2, Sparkles, Trophy } from "lucide-react";

type AchievementIcon = "lightbulb" | "sparkles" | "award" | "trophy" | "mic";

interface AchievementCardProps {
  title: string;
  year: string;
  category: string;
  description: string;
  icon?: AchievementIcon;
}

const icons = {
  lightbulb: Lightbulb,
  sparkles: Sparkles,
  award: Award,
  trophy: Trophy,
  mic: Mic2,
};

export default function AchievementCard({
  title,
  year,
  category,
  description,
  icon = "award",
}: AchievementCardProps) {
  const Icon = icons[icon];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-site bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>

        <span className="rounded-full bg-site px-3 py-1 text-xs font-semibold text-primary">
          {category}
        </span>
      </div>

      <p className="mt-6 text-sm font-semibold text-secondary">
        {year}
      </p>

      <h3 className="mt-3 text-lg font-bold leading-7 text-primary">
        {title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-6 text-muted-site">
        {description}
      </p>
    </article>
  );
}
