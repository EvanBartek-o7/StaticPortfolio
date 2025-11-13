import { experiences } from '../../data/experience';
import Section from '../ui/Section';
import Tag from '../ui/Tag';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <h4 className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                  {exp.company}
                </h4>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600 dark:text-gray-400">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

