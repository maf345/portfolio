import type { Metadata } from "next";
import { DashboardGallery } from "@/components/dashboards/dashboard-gallery";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Dashboards",
  description: "Tableau Public dashboards — HR analytics, ecommerce, and customer churn analysis.",
  path: "/dashboards",
});

export default function DashboardsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="section-label">Tableau Public</p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
        Dashboards
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
        A selection of interactive workbooks published on Tableau Public — click any card to explore
        the full dashboard.
      </p>

      <div className="mt-10">
        <DashboardGallery />
      </div>
    </div>
  );
}
