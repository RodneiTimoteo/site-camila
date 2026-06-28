import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import AuthorityStats from "@/components/sections/AuthorityStats";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
import ProfessionalJourney from "@/components/sections/ProfessionalJourney";
import ImpactAreas from "@/components/sections/ImpactAreas";
import Achievements from "@/components/sections/Achievements";
import ProgramsCommunity from "@/components/sections/ProgramsCommunity";

export default function Home() {
  return (
    <>
      <Header />

      <main>
       <Hero
          eyebrow="Camila Timóteo Vieira"
          role="Data & AI Leader • Educadora • Palestrante"
          title="Transformo dados, tecnologia e conhecimento em impacto."
          description="Há mais de 15 anos, conecto estratégia, inteligência artificial, liderança e educação para impulsionar resultados, desenvolver profissionais e transformar organizações."
          primaryAction={{
            label: "Conheça minha trajetória",
            href: "#trajetoria",
          }}
          secondaryAction={{
            label: "Conheça meus programas",
            href: "#programas",
          }}
        />

        <AuthorityStats />

        <About />

        <ProfessionalJourney />

        <ImpactAreas />

        <Achievements />

        <ProgramsCommunity />

        <Testimonials />

        <FAQ />
        <Contact />
       <CTA
          eyebrow="Vamos nos conectar?"
          title="Conheça melhor meu trabalho, meus projetos e minha trajetória."
          description="Entre em contato comigo para conversarmos sobre projetos, oportunidades, conteúdos e possíveis parcerias."
          primaryAction={{
            label: "Entrar em contato",
            href: "#contato",
          }}
          secondaryAction={{
            label: "Ver minha experiência",
            href: "#experiencia",
          }}
        />
      </main>

      <Footer />
    </>
  );
}
