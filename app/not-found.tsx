import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">Page not found</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent/90"
        >
          Go home
        </Link>
        <Link
          href="/blog"
          className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:border-accent hover:text-accent dark:border-gray-700 dark:text-gray-300"
        >
          Read the blog
        </Link>
      </div>
    </div>
  );
}
