"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/project-card";
import type { ProjectMeta } from "@/lib/projects";
import {
  ALL_PROJECT_CATEGORIES,
  type ProjectCategory,
  projectMatchesCategory,
} from "@/lib/project-categories";
import { cn } from "@/lib/utils";

type ProjectListProps = {
  projects: ProjectMeta[];
};

export function ProjectList({ projects }: ProjectListProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const counts = useMemo(() => {
    const map = new Map<string, number>([["All", projects.length]]);
    for (const category of ALL_PROJECT_CATEGORIES) map.set(category, 0);
    for (const project of projects) {
      for (const category of ALL_PROJECT_CATEGORIES) {
        if (projectMatchesCategory(project.tags, category)) {
          map.set(category, (map.get(category) ?? 0) + 1);
        }
      }
    }
    return map;
  }, [projects]);

  const filtered = useMemo(() => {
    let result =
      activeCategory === "All"
        ? projects
        : projects.filter((project) => projectMatchesCategory(project.tags, activeCategory));

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          (project.metrics?.some((metric) => metric.toLowerCase().includes(query)) ?? false),
      );
    }

    return result;
  }, [projects, activeCategory, searchQuery]);

  const filters: Array<ProjectCategory | "All"> = [
    "All",
    ...ALL_PROJECT_CATEGORIES.filter((category) => (counts.get(category) ?? 0) > 0),
  ];

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                activeCategory === category
                  ? "border-accent bg-accent text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-accent/40 hover:text-accent dark:border-gray-700 dark:bg-surface-dark-muted dark:text-gray-300 dark:hover:border-accent",
              )}
            >
              {category}
              <span className="ml-1.5 opacity-70">({counts.get(category) ?? 0})</span>
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm transition-colors placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 dark:border-gray-700 dark:bg-surface-dark-muted dark:text-gray-100 dark:placeholder:text-gray-500 sm:w-64"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="Clear search"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {searchQuery && (
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Found {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          {" "}
          for &ldquo;<span className="font-medium text-accent">{searchQuery}</span>&rdquo;
        </p>
      )}

      {filtered.length === 0 ? (
        <div className="mt-16 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">No projects found</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {searchQuery
              ? "Try adjusting your search or filters"
              : "No projects in this category yet."}
          </p>
          {(searchQuery || activeCategory !== "All") && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 text-sm font-medium text-accent hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
