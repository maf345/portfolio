export default function ProjectLoading() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[21/9] max-h-80 w-full bg-gray-200 dark:bg-gray-800" />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-12 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="h-14 rounded-xl bg-gray-200 dark:bg-gray-800" />
          <div className="h-14 rounded-xl bg-gray-200 dark:bg-gray-800" />
          <div className="h-14 rounded-xl bg-gray-200 dark:bg-gray-800" />
        </div>
        <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-800" />
        <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-800" />
        <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-800" />
      </div>
    </div>
  );
}
