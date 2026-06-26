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
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
          <Award className="h-5 w-5" aria-hidden="true" />
        </span>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {category}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-bold leading-7 text-slate-950">
        {title}
      </h3>

      <p className="mt-3 text-sm font-medium text-slate-700">
        {institution}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {date}
      </p>
    </article>
  );
}