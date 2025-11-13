import { skills } from '../../data/skills';
import Section from '../ui/Section';
import Tag from '../ui/Tag';

export default function Skills() {
  const skillsByCategory = {
    language: skills.filter(s => s.category === 'language'),
    framework: skills.filter(s => s.category === 'framework'),
    tool: skills.filter(s => s.category === 'tool'),
    other: skills.filter(s => s.category === 'other')
  };

  const categoryLabels = {
    language: 'Languages',
    framework: 'Frameworks & Libraries',
    tool: 'Tools & Technologies',
    other: 'Other Skills'
  };

  return (
    <Section id="skills" title="Skills" className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill) => (
                  <Tag key={skill.name}>{skill.name}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

