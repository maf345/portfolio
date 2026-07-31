"use client";

import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  oneDark,
  coldarkDark,
  oneLight,
  vs,
  coldarkCold,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
  language: string;
  children: string;
};

const DARK_THEMES: Record<string, typeof vscDarkPlus> = {
  python: oneDark,
  sql: coldarkDark,
  vb: vscDarkPlus,
  javascript: oneDark,
  typescript: oneDark,
  bash: coldarkDark,
  shell: coldarkDark,
};

const LIGHT_THEMES: Record<string, typeof oneLight> = {
  python: oneLight,
  sql: coldarkCold,
  vb: vs,
  javascript: oneLight,
  typescript: oneLight,
  bash: coldarkCold,
  shell: coldarkCold,
};

const LANGUAGE_LABELS: Record<string, string> = {
  python: "Python",
  sql: "SQL",
  vb: "VBA",
  javascript: "JavaScript",
  typescript: "TypeScript",
  bash: "Bash",
  shell: "Shell",
};

export function CodeBlock({ language, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const darkTheme = DARK_THEMES[language.toLowerCase()] || vscDarkPlus;
  const lightTheme = LIGHT_THEMES[language.toLowerCase()] || oneLight;
  const theme = isDark ? lightTheme : darkTheme;
  const label = LANGUAGE_LABELS[language.toLowerCase()] || language;

  const codeBackground = isDark ? "#f6f8fa" : "#282c34";

  return (
    <div className={`not-prose group relative mb-4 overflow-hidden rounded-lg border ${isDark ? "border-gray-600" : "border-gray-700"}`}>
      <div className={`flex items-center justify-between border-b px-4 py-2 ${isDark ? "border-gray-600 bg-gray-800" : "border-gray-700 bg-gray-900"}`}>
        <span className={`text-xs font-medium ${isDark ? "text-gray-300" : "text-gray-400"}`}>{label}</span>
        <button
          type="button"
          onClick={handleCopy}
          className={`flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium transition-colors ${
            isDark
              ? "bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        style={theme}
        language={language}
        PreTag="pre"
        customStyle={{
          margin: 0,
          padding: "1rem",
          fontSize: "0.875rem",
          lineHeight: "1.6",
          background: codeBackground,
        }}
        codeTagProps={{
          style: {
            fontFamily: "var(--font-mono), IBM Plex Mono, ui-monospace, monospace",
            fontFeatureSettings: '"liga" 0, "calt" 0',
            WebkitFontSmoothing: "auto",
            MozOsxFontSmoothing: "auto",
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
