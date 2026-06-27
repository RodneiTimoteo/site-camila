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
          title="Transformo experiência em conhecimento, resultados e impacto."
          description="Ao longo da minha trajetória, reuni experiência em dados, analytics, tecnologia e liderança para transformar desafios em resultados e compartilhar conhecimento."
          primaryAction={{
            label: "Conheça minha trajetória",
            href: "#sobre",
          }}
          secondaryAction={{
            label: "Conheça meus projetos",
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