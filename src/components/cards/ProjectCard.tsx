
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
  image?: string;
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
  image,
}: ProjectCardProps) {
  const Icon = projectIcons[type];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-site bg-surface p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
{type === "course" && (
  <div className="mb-6 overflow-hidden rounded-xl bg-[#202a44]">
    <img
      src="/images/camila-conhecimento.jpeg"
      alt="Camila compartilhando conhecimento"
      className="h-72 w-full object-contain object-center"
      loading="lazy"
    />
  </div>
)}
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>

      <h3 className="mt-6 text-xl font-bold text-primary">
        {title}
      </h3>

      <p className="mt-4 flex-1 leading-7 text-muted-site">
        {description}
      </p>

      <a
        href={url}
        target={url.startsWith("http") ? "_blank" : undefined}
        rel={url.startsWith("http") ? "noreferrer" : undefined}
        className="mt-7 inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3"
      >
        {label}

        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );
}