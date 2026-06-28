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
        {projectsData.items.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      
    </Section>
  );
}
