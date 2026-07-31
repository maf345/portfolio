export type ProjectCategory = "Web Development" | "Data & BI" | "AI & Analytics";

/** Maps individual tech tags to filter groups shown on the projects page */
export const PROJECT_TAG_GROUPS: Record<ProjectCategory, readonly string[]> = {
  "Web Development": [
    "PHP",
    "Laravel",
    "Django",
    "JavaScript",
    "HTML",
    "CSS",
    "Google API",
    "MySQL",
    "Python",
  ],
  "Data & BI": ["Tableau", "ETL", "Snowflake"],
  "AI & Analytics": ["Healthcare", "Agentic AI", "LangSmith"],
};

export const ALL_PROJECT_CATEGORIES = Object.keys(
  PROJECT_TAG_GROUPS,
) as ProjectCategory[];

export function isProjectCategory(value: string): value is ProjectCategory {
  return value in PROJECT_TAG_GROUPS;
}

export function getProjectCategories(tags: string[]): ProjectCategory[] {
  const matched = new Set<ProjectCategory>();
  for (const tag of tags) {
    for (const [category, groupTags] of Object.entries(PROJECT_TAG_GROUPS)) {
      if (groupTags.includes(tag)) {
        matched.add(category as ProjectCategory);
      }
    }
  }
  return ALL_PROJECT_CATEGORIES.filter((cat) => matched.has(cat));
}

export function projectMatchesCategory(tags: string[], category: ProjectCategory): boolean {
  const groupTags = PROJECT_TAG_GROUPS[category];
  return tags.some((tag) => groupTags.includes(tag));
}

export function inferPrimaryProjectCategory(tags: string[]): ProjectCategory {
  const categories = getProjectCategories(tags);
  if (categories.includes("AI & Analytics")) return "AI & Analytics";
  if (categories.includes("Data & BI")) return "Data & BI";
  return "Web Development";
}
