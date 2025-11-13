import Button from '../ui/Button';
import Section from '../ui/Section';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          A passionate developer building modern web applications and creating exceptional digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </Section>
  );
}

