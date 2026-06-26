import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <Section id="depoimentos" className="bg-slate-50">
      <SectionTitle
        eyebrow="Recomendações"
        title="Reconhecimento construído por meio da liderança e das relações profissionais."
        description="Depoimentos de profissionais que acompanharam de perto a trajetória e o trabalho de Camila."
        align="center"
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            {...testimonial}
          />
        ))}
      </div>
    </Section>
  );
}