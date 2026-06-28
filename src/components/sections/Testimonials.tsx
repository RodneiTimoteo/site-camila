import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";
import { testimonials } from "@/data/testimonials";

const visibleTestimonials = [
  "Fabio Nascimento",
  "Amanda Bergamini",
  "Daniel Lage",
] satisfies readonly string[];

export default function Testimonials() {
  const displayedTestimonials = testimonials.filter((testimonial) =>
    visibleTestimonials.includes(testimonial.name)
  );

  return (
    <Section id="depoimentos" className="bg-surface">
      <SectionTitle
        eyebrow="Recomendações"
        title="Liderança reconhecida por quem construiu resultados ao seu lado."
        description="Relatos de profissionais que acompanharam de perto sua atuação, liderança e contribuição para o desenvolvimento de pessoas e negócios."
        align="center"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedTestimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="flex h-full flex-col rounded-2xl border border-site bg-site p-7 sm:p-8"
          >
            <div className="text-4xl font-bold leading-none text-secondary">
              “
            </div>

            <blockquote className="mt-3 flex-1 text-base leading-7 text-primary sm:text-lg sm:leading-8">
              {testimonial.quote}
            </blockquote>

            <footer className="mt-7 border-t border-site pt-5">
              <p className="font-bold text-primary">
                {testimonial.name}
              </p>

              <p className="mt-2 text-sm font-medium text-site">
                {testimonial.role}
              </p>

              <p className="mt-1 text-sm text-muted-site">
                {testimonial.relationship}
              </p>
            </footer>
          </article>
        ))}
      </div>
    </Section>
  );
}
