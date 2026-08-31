import type { Metadata } from "next";
import { TableauShowcase } from "@/components/dashboards/tableau-showcase";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Dashboards",
  description: "Interactive Tableau Public dashboards — HR analytics, ecommerce, and churn analysis.",
  path: "/dashboards",
});

export default function DashboardsPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-gray-200 bg-mesh-light dark:border-gray-800 dark:bg-mesh-dark">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="section-label">Tableau Public</p>
          <h1 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Interactive dashboards
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            HR analytics, ecommerce performance, and churn analysis — explore live Tableau workbooks
            published on Tableau Public.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <TableauShowcase />
      </section>
    </div>
  );
}
