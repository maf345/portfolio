"use client";

import { useEffect, useRef } from "react";

type TableauEmbedProps = {
  workbook: string;
  view: string;
  title: string;
};

export function TableauEmbed({ workbook, view, title }: TableauEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.replaceChildren();

    const placeholder = document.createElement("div");
    placeholder.className = "tableauPlaceholder";
    placeholder.style.position = "relative";
    placeholder.style.width = "100%";

    const vizObject = document.createElement("object");
    vizObject.className = "tableauViz";
    vizObject.style.width = "100%";
    vizObject.style.display = "none";

    const params: [string, string][] = [
      ["host_url", "https%3A%2F%2Fpublic.tableau.com%2F"],
      ["embed_code_version", "3"],
      ["site_root", ""],
      ["name", `${workbook}/${view}`],
      ["tabs", "no"],
      ["toolbar", "yes"],
      ["animate_transition", "yes"],
      ["display_static_image", "yes"],
      ["display_spinner", "yes"],
      ["display_overlay", "yes"],
      ["display_count", "yes"],
      ["language", "en-US"],
    ];

    for (const [name, value] of params) {
      const param = document.createElement("param");
      param.name = name;
      param.value = value;
      vizObject.appendChild(param);
    }

    placeholder.appendChild(vizObject);
    container.appendChild(placeholder);

    const setHeight = () => {
      vizObject.style.height = `${placeholder.offsetWidth * 0.75}px`;
    };

    setHeight();

    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    placeholder.insertBefore(script, vizObject);

    const observer = new ResizeObserver(setHeight);
    observer.observe(placeholder);

    return () => {
      observer.disconnect();
      container.replaceChildren();
    };
  }, [workbook, view]);

  return <div ref={containerRef} className="w-full bg-white dark:bg-gray-900" aria-label={title} />;
}
