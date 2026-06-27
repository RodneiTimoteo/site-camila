import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
}: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/15 bg-white/10 p-7 shadow-sm backdrop-blur-sm">

      <Quote className="h-8 w-8 text-secondary" aria-hidden="true" />

      <blockquote className="mt-6 flex-1 text-lg leading-8 text-white/85">
        “{content}”
      </blockquote>

      <footer className="mt-8 border-t border-white/15 pt-5">
        <p className="font-semibold text-white">
          {name}
        </p>

        <p className="mt-1 text-sm text-white/60">
          {role} — {company}
        </p>
      </footer>
    </article>
  );
}