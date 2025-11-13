import type { Project } from '../../types';
import Tag from '../ui/Tag';
import Button from '../ui/Button';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        {project.featured && (
          <span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
            Featured
          </span>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
        <div className="flex gap-3 mt-auto">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              as="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center"
            >
              GitHub
            </Button>
          )}
          {project.liveUrl && (
            <Button
              variant="primary"
              size="sm"
              as="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center"
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

