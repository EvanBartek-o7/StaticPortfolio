import Section from '../ui/Section';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            When I'm not coding, you can find me Lifting, Playing Music or Playing Games.
          </p>
        </div>
      </div>
    </Section>
  );
}

