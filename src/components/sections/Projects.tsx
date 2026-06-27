import ProjectCard from "@/components/cards/ProjectCard";
import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { projectsData } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="cursos">
      <SectionTitle
        eyebrow={projectsData.eyebrow}
        title={projectsData.title}
        description={projectsData.description}
        align="center"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
  <ProjectCard
    type="course"
    title="Ganhando o Tempo"
    description="Criei este curso para ajudar pessoas a organizarem suas rotinas, definirem prioridades e utilizarem melhor o próprio tempo."
    label="Conhecer meu curso"
    url="#"
    image="/images/camila-conhecimento.jpeg"
  />

  <ProjectCard
    type="whatsapp"
    title="Meu canal no WhatsApp"
    description="Compartilho conteúdos, reflexões e informações diretamente com a minha comunidade pelo WhatsApp."
    label="Acessar meu canal"
    url="#"
  />

  <ProjectCard
    type="instagram"
    title="Meus conteúdos no Instagram"
    description="Compartilho publicações sobre produtividade, carreira, rotina, liderança e desenvolvimento profissional."
    label="Acompanhar meu Instagram"
    url="https://www.instagram.com/kamysvieira/"
  />
</div>
      
    </Section>
  );
}