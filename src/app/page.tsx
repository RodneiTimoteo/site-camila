import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/common/SectionTitle";
import Features from "@/components/sections/Features";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Header />

      <main>
       <Hero
          eyebrow="Dados • Liderança • Produtividade"
          title="Transformando experiência em conhecimento, resultados e impacto."
          description="Conheça a trajetória de Camila Timóteo Vieira, sua atuação em dados e analytics, experiências em liderança e projetos voltados à produtividade."
          primaryAction={{
            label: "Conhecer trajetória",
            href: "#sobre",
          }}
          secondaryAction={{
            label: "Ver cursos",
            href: "#cursos",
          }}
        />

        <About />

        <Experience />

        <Achievements />

        <Projects />

        <Testimonials />

        <FAQ />
        <Contact />
        <CTA
          eyebrow="Pronto para começar?"
          title="Transforme sua próxima ideia em um projeto profissional."
          description="Use esta base para criar sites institucionais e landing pages com mais velocidade, organização e consistência."
          primaryAction={{
            label: "Entrar em contato",
            href: "#contato",
          }}
          secondaryAction={{
            label: "Ver experiência",
            href: "#experiencia",
          }}
        />
      </main>

      <Footer />
    </>
  );
}