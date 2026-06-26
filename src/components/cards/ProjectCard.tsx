import {
  ArrowUpRight,
  BookOpen,
  Camera,
  MessageCircle,
} from "lucide-react";

interface ProjectCardProps {
  type: "course" | "whatsapp" | "instagram";
  title: string;
  description: string;
  label: string;
  url: string;
}

const projectIcons = {
  course: BookOpen,
  whatsapp: MessageCircle,
  instagram: Camera,
};

export default function ProjectCard({
  type,
  title,
  description,
  label,
  url,
}: ProjectCardProps) {
  const Icon = projectIcons[type];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>

      <h3 className="mt-6 text-xl font-bold text-slate-950">
        {title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-slate-600">
        {description}
      </p>

      <a
        href={url}
        target={url.startsWith("http") ? "_blank" : undefined}
        rel={url.startsWith("http") ? "noreferrer" : undefined}
        className="mt-7 inline-flex items-center gap-2 font-semibold text-slate-950 transition hover:gap-3"
      >
        {label}

        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );
}