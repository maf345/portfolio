import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlogImage } from "@/components/blog/blog-image";
import { CodeBlock } from "@/components/blog/code-block";

// Helper to generate heading IDs
const generateId = (children: React.ReactNode): string => {
  const text = typeof children === "string" ? children : String(children);
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
};

const components: React.ComponentProps<typeof ReactMarkdown>["components"] = {
  h2: ({ children, ...props }) => {
    const id = generateId(children);
    return (
      <h2
        id={id}
        className="mb-4 mt-10 scroll-mt-24 font-display text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        {...props}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }) => {
    const id = generateId(children);
    return (
      <h3
        id={id}
        className="mb-3 mt-8 scroll-mt-24 font-display text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        {...props}
      >
        {children}
      </h3>
    );
  },
  h4: ({ children, ...props }) => {
    const id = generateId(children);
    return (
      <h4
        id={id}
        className="mb-2 mt-6 scroll-mt-24 font-display text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        {...props}
      >
        {children}
      </h4>
    );
  },
  p: ({ node, children, ...props }) => {
    // Don't wrap lone images in paragraphs
    if (
      node?.children?.length === 1 &&
      node.children[0].type === "element" &&
      node.children[0].tagName === "img"
    ) {
      return <>{children}</>;
    }
    return (
      <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300" {...props}>
        {children}
      </p>
    );
  },
  ul: (props) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-700 dark:text-gray-300" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: (props) => (
    <a className="font-medium text-accent underline-offset-4 hover:underline" {...props} />
  ),
  code: ({ className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    const language = match ? match[1] : "";

    if (language) {
      return <CodeBlock language={language}>{String(children).replace(/\n$/, "")}</CodeBlock>;
    }

    return (
      <code
        className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[13px] text-gray-800 dark:bg-gray-800 dark:text-gray-200"
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children }) => <>{children}</>,
  blockquote: (props) => (
    <blockquote
      className="mb-4 border-l-4 border-accent/40 bg-accent/5 py-2 pl-4 italic text-gray-700 dark:text-gray-300"
      {...props}
    />
  ),
  img: ({ src, alt }) => <BlogImage src={typeof src === "string" ? src : undefined} alt={alt} />,
  table: (props) => (
    <div className="mb-4 overflow-x-auto">
      <table className="min-w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border border-gray-200 bg-gray-50 px-3 py-2 text-left font-semibold dark:border-gray-700 dark:bg-gray-800"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border border-gray-200 px-3 py-2 dark:border-gray-700" {...props} />
  ),
};

type MdxContentProps = {
  source: string;
};

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="prose prose-gray max-w-none dark:prose-invert">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {source}
      </ReactMarkdown>
    </div>
  );
}
