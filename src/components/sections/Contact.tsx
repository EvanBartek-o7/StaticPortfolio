import Section from '../ui/Section';

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          <a
            href="mailto:bartekevan@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            bartekevan@gmail.com
          </a>
        </p>
      </div>
    </Section>
  );
}

