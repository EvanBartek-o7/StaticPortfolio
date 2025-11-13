import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

