import Section from '../ui/Section';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-friendly web applications. 
            With expertise in modern JavaScript frameworks and a keen eye for design, I bring ideas to life through code.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            My journey in web development started with a curiosity about how websites work, and it has evolved into a career 
            where I get to solve complex problems and build solutions that make a difference. I enjoy working with React, TypeScript, 
            and Node.js, and I'm always eager to learn new technologies and best practices.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing 
            knowledge with the developer community.
          </p>
        </div>
      </div>
    </Section>
  );
}

