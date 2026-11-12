import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** Renders migrated write-ups and FAQ answers. External links open in a new tab. */
export function Markdown({ children, className = "prose" }: { children: string; className?: string }) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href = "", children }) => {
            const internal = href.startsWith("/") || href.startsWith("#");
            return internal ? (
              <a href={href}>{children}</a>
            ) : (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
