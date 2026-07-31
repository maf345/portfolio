type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export function SectionHeading({ label, title, description, action }: SectionHeadingProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        {label && <p className="section-label">{label}</p>}
        <h2 className="mt-1 font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        {description && (
          <p className="mt-2 max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
