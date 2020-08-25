import "styled-components";

type ThemeMode = "dark" | "light";

declare module "styled-components" {
  interface DefaultTheme {
    mode: ThemeMode;
  }
}
