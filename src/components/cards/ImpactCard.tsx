import { BrainCircuit, GraduationCap, Target } from "lucide-react";

type ImpactIcon = "brain" | "graduation" | "target";

interface ImpactCardProps {
  title: string;
  description: string;
  highlights: readonly string[];
  icon: ImpactIcon;
}

const icons = {
  brain: BrainCircuit,
  graduation: GraduationCap,
  target: Target,
};

export default function ImpactCard({
  title,
  description,
  highlights,
  icon,
}: ImpactCardProps) {
  const Icon = icons[icon];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-site bg-surface p-7 shadow-sm">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>

      <h3 className="mt-7 text-xl font-bold leading-7 text-primary">
        {title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-muted-site">
        {description}
      </p>

      <ul className="mt-7 grid gap-3">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-3 text-sm font-medium text-site">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-secondary)]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
