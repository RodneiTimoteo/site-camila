import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import AuthorityStats from "@/components/sections/AuthorityStats";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/sections/Testimonials";
import ContentCommunity from "@/components/sections/ContentCommunity";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
import ProfessionalJourney from "@/components/sections/ProfessionalJourney";
import ImpactAreas from "@/components/sections/ImpactAreas";
import Achievements from "@/components/sections/Achievements";
import ProgramsCommunity from "@/components/sections/ProgramsCommunity";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/social";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "pt-BR",
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}/images/camila-hero.jpeg`,
      jobTitle: "Data & AI Leader, educadora e palestrante",
      sameAs: socialLinks.map((social) => social.url),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
            label: "Conheça meus projetos",
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

        <ContentCommunity />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
