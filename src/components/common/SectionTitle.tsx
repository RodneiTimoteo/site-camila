interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionTitleProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-2xl"
      }
    >
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.2em] ${
            isDark ? "text-secondary" : "text-secondary"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${
          isDark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-lg leading-8 ${
            isDark ? "text-white/70" : "text-muted-site"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
