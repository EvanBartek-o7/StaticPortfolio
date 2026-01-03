import Section from '../ui/Section';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I'm a Computer Science student at the University of Notre Dame, graduating in May 2026 with a Bachelor of Science degree and a GPA of 3.7. I'm passionate about building full stack applications and have experience working with enterprise systems at Winsupply, where I've been an intern since June 2021.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            My interests span from web development with Angular and React to system-level programming in C. I enjoy working on projects that combine creativity with technical challenges. I've built everything from digital audio workstations to fitness tracking apps, always focusing on creating clean, efficient solutions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            When I'm not coding, you can find me lifting, playing Music and playing games.
          </p>
        </div>
      </div>
    </Section>
  );
}

