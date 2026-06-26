interface ExperienceCardProps {
  title: string;
  description: string;
  skills: readonly string[];
}

export default function ExperienceCard({
  title,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-xl font-bold text-slate-950">
        {title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}