import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/site";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        label="Recommendations"
        title="What colleagues say"
        description="Feedback from analytics, BI, and delivery partners."
      />
      <div className="mt-8 mx-auto max-w-3xl">
        {testimonials.map((item) => (
          <figure
            key={item.name}
            className="bento-card flex flex-col p-6"
          >
            <blockquote className="flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-gray-100 pt-4 dark:border-gray-800">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{item.name}</p>
              <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                {item.role} · {item.company}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
