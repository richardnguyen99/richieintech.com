declare module "@mdx-js/react" {
  import * as React from "react";

  type ComponentType =
    | "a"
    | "blockquote"
    | "code"
    | "delete"
    | "em"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "hr"
    | "img"
    | "inlineCode"
    | "li"
    | "ol"
    | "p"
    | "pre"
    | "strong"
    | "sup"
    | "table"
    | "td"
    | "thematicBreak"
    | "tr"
    | "ul"
    | any;
  export type Components = {
    [key in ComponentType]?:
      | React.ComponentType<{ children: React.ReactNode }>
      | React.FC<U>;
  };
  export interface MDXProviderProps {
    children: React.ReactNode;
    components: Components;
  }
  // eslint-disable-next-line react/prefer-stateless-function
  export class MDXProvider extends React.Component<MDXProviderProps> {}
}

declare module "github-slugger";
