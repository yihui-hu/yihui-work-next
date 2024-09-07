import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import "../src/app/styles/md.css";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    img: (props) => (
      <Image
        className="img"
        sizes="100vw"
        width={1000}
        height={1000}
        style={{ width: "100%", height: "auto" }}
        priority={true}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
