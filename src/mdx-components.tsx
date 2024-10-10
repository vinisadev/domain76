import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h3: ({ children }) => {
      return <h3 className="text-semibold text-2xl pt-5">{children}</h3>;
    },
    p: ({ children }) => {
      return <p className="pt-5">{children}</p>;
    },
    ...components,
  };
}
