import Section from '../ui/Section';
import Button from '../ui/Button';

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              ></textarea>
            </div>
            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Or reach out directly:</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              your.email@example.com
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

