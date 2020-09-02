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
    --color-bg: ${props => (props.theme.mode === "light" ? `#fff` : `#1c1c1e`)};
    --color-border: ${props =>
      props.theme.mode === "light" ? `#fff` : `#333333`};
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


`;

export default GlobalStyle;
