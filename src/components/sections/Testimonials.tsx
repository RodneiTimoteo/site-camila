import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <Section id="depoimentos" className="bg-primary text-white">
      <SectionTitle
        eyebrow="Recomendações"
        title="O reconhecimento que construí por meio do meu trabalho e das relações profissionais."
        description="Confira relatos de profissionais que acompanharam minha trajetória e minha atuação."
        align="center"
        theme="dark"
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