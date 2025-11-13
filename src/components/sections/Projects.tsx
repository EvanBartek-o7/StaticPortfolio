import { projects } from '../../data/projects';
import Section from '../ui/Section';
import ProjectGrid from '../projects/ProjectGrid';

export default function Projects() {
  return (
    <Section id="projects" title="Projects" className="bg-gray-50 dark:bg-gray-900">
      <ProjectGrid projects={projects} />
    </Section>
  );
}

