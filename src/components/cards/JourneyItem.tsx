interface JourneyItemProps {
  period: string;
  title: string;
  organization: string;
  description: string;
  highlights?: readonly string[];
  isCurrent?: boolean;
}

export default function JourneyItem({
  period,
  title,
  organization,
  description,
  highlights,
  isCurrent = false,
}: JourneyItemProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border bg-surface p-5 shadow-sm ${
        isCurrent
          ? "border-[color-mix(in_srgb,var(--color-secondary)_40%,var(--color-border))]"
          : "border-site"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full bg-site px-3 py-1 text-sm font-semibold text-secondary">
          {period}
        </span>

        {isCurrent && (
          <span className="rounded-full border border-site px-2.5 py-1 text-xs font-semibold text-secondary">
            Atual
          </span>
        )}
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-site">
          {organization}
        </p>

        <h3 className="mt-3 text-lg font-bold leading-6 text-primary">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-muted-site">
          {description}
        </p>
      </div>

      {highlights && highlights.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-site bg-site px-2.5 py-1 text-xs font-medium text-primary"
            >
              {highlight}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
