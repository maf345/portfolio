export type BlogCategory = "Python" | "Snowflake" | "Tableau" | "Excel" | "Analytics";

export type CategoryStyle = {
  label: string;
  /** Primary brand color — shared by gradient, badge, and icon */
  color: string;
  gradient: string;
  accent: string;
  icon: "python" | "snowflake" | "tableau" | "excel" | "analytics";
};

export const BLOG_CATEGORIES: Record<BlogCategory, CategoryStyle> = {
  Python: {
    label: "Python",
    color: "#3776AB",
    gradient: "linear-gradient(135deg, #eef5fc 0%, #d4e8f7 50%, #b8daf2 100%)",
    accent: "#3776AB",
    icon: "python",
  },
  Snowflake: {
    label: "Snowflake",
    color: "#29B5E8",
    gradient: "linear-gradient(135deg, #eef9fd 0%, #d4f1fb 50%, #b0e5f7 100%)",
    accent: "#29B5E8",
    icon: "snowflake",
  },
  Tableau: {
    label: "Tableau",
    color: "#E8762D",
    gradient: "linear-gradient(135deg, #fef5ef 0%, #fde8d8 50%, #f9cfad 100%)",
    accent: "#E8762D",
    icon: "tableau",
  },
  Excel: {
    label: "Excel",
    color: "#217346",
    gradient: "linear-gradient(135deg, #eef7f2 0%, #d4ebe0 50%, #b0dcc8 100%)",
    accent: "#217346",
    icon: "excel",
  },
  Analytics: {
    label: "Analytics",
    color: "#6366F1",
    gradient: "linear-gradient(135deg, #f0f1fe 0%, #e0e2fc 50%, #c8cbf9 100%)",
    accent: "#6366F1",
    icon: "analytics",
  },
};

export const ALL_CATEGORIES = Object.keys(BLOG_CATEGORIES) as BlogCategory[];

export function isBlogCategory(value: string): value is BlogCategory {
  return value in BLOG_CATEGORIES;
}

export function inferCategory(tags: string[], slug: string): BlogCategory {
  const joined = tags.join(" ").toLowerCase();
  if (joined.includes("excel") || joined.includes("vba")) return "Excel";
  if (joined.includes("tableau")) return "Tableau";
  if (joined.includes("snowflake") || joined.includes("snowsql")) return "Snowflake";
  if (joined.includes("python") || joined.includes("pandas")) return "Python";
  if (slug.includes("excel")) return "Excel";
  if (slug.includes("tableau")) return "Tableau";
  if (slug.includes("snowflake") || slug.includes("snowsql")) return "Snowflake";
  if (slug.includes("python")) return "Python";
  return "Analytics";
}
