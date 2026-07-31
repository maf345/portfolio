import Image from "next/image";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  if (images.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        Screenshots
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {images.map((src, index) => (
          <div
            key={src}
            className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800"
          >
            <Image
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              width={800}
              height={500}
              loading={index < 2 ? "eager" : "lazy"}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
