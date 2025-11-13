interface TagProps {
  children: string;
  className?: string;
}

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 ${className}`}
    >
      {children}
    </span>
  );
}

