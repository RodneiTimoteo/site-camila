import { Award } from "lucide-react";

interface AchievementCardProps {
  title: string;
  institution: string;
  date: string;
  category: string;
}

export default function AchievementCard({
  title,
  institution,
  date,
  category,
}: AchievementCardProps) {
  return (
    <article className="rounded-2xl border border-site bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
          <Award className="h-5 w-5" aria-hidden="true" />
        </span>

        <span className="rounded-full bg-site px-3 py-1 text-xs font-semibold text-primary">
          {category}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-bold leading-7 text-primary">
        {title}
      </h3>

      <p className="mt-3 text-sm font-medium text-site">
        {institution}
      </p>

      <p className="mt-1 text-sm text-muted-site">
        {date}
      </p>
    </article>
  );
}