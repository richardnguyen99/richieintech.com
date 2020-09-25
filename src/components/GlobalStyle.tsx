/**
 * Global style component for Gatsby application.
 * This component should work as normalized.css and
 * configure global variables.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
  /* stylelint-disable property-no-vendor-prefix */

  :root {
    --color-text: ${props =>
      props.theme.mode === "light" ? `#1c1c1e` : `#f5f5f5`};
    --color-subText: ${props =>
      props.theme.mode === "light" ? `#64707d` : `#eee`};
    --color-bg: ${props => (props.theme.mode === "light" ? `#fff` : `#1c1c1e`)};
    --color-bg-blockQuote: ${props =>
      props.theme.mode === "light" ? `#f5f5f5` : `#1f1f1f`};
    --color-footer: ${props =>
      props.theme.mode === "light"
        ? `linear-gradient(180deg, var(--color-bg), #e0e0e0)`
        : `linear-gradient(180deg, var(--color-bg), #0f0f0f)`};
    --color-border: ${props =>
      props.theme.mode === "light" ? `#eaecef` : `rgba(245, 245, 245, 0.2)`};
    --color-border-onHover: ${props =>
      props.theme.mode === "light" ? `#eaecee` : `rgba(245, 245, 245, 0.6)`};
    --color-bg-post: ${props =>
      props.theme.mode === "light" ? `#fff` : `#1c1c1e`};
    --color-heading: #ff5a5f;
    --font-serif: "Merriweather", serif;
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-heading: "Montserrat", sans-serif;
    --font-mono: "SF Mono", monospace;
  }

  *,
  *::before,
  *::after {
    outline: none;
    box-sizing: border-box;
    cursor: none !important;
  }

  *:hover {
    cursor: none !important;
  }

  html {
    font-size: 16px;
    overflow-x: hidden;
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }


  body {
    margin: 0;
    color: var(--color-text);
    background: var(--color-bg);
  }



  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }


  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }


  audio:not([controls]) {
    display: none;
    height: 0;
  }


  [hidden],
  template {
    display: none;
  }



  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    cursor: none;
  }

  a:active,
  a:hover,
  a:visited {
    outline: 0;
  }



  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }


  b,
  strong {
    font-weight: bold;
  }


  dfn {
    font-style: italic;
  }


  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }


  mark {
    background: #ff0;
    color: #000;
  }


  small {
    font-size: 80%;
  }


  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }



  img {
    border: 0;
  }


  /* svg:not(:root) {
    overflow: hidden;
  }*/



  figure {
    margin: 1em 40px;
  }


  hr {
    box-sizing: content-box;
    height: 0;
  }


  pre {
    overflow: auto;
  }


  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
    font-size: 1em;
  }




  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }


  button {
    overflow: visible;
  }


  button,
  select {
    text-transform: none;
  }


  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
  }


  button[disabled],
  html input[disabled] {
    cursor: default;
  }


  input {
    line-height: normal;
  }


  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }


  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }


  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    height: auto;
  }


  input[type="search"] {
    -webkit-appearance: textfield;
  }


  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }


  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }


  legend {
    border: 0;
    padding: 0;
  }


  textarea {
    overflow: auto;
  }


  optgroup {
    font-weight: bold;
  }



  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  code[class*="language-"],
pre[class*="language-"] {
	color: #ccc;
	background: none;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;

}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 0.5em;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
	overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #2d2d2d;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #999;
}

.token.punctuation {
	color: #ccc;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
	color: #e2777a;
}

.token.function-name {
	color: #6196cc;
}

.token.boolean,
.token.number,
.token.function {
	color: #f08d49;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
	color: #f8c555;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
	color: #cc99cd;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable {
	color: #7ec699;
}

.token.operator,
.token.entity,
.token.url {
	color: #67cdcc;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}

.token.inserted {
	color: green;
}
`;

export default GlobalStyle;
