import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textPrimary: string;
    textSecondary: string;
    bgPrimary: string;
    bgSecondary: string;
    bgImgDesktop: string;
    bgImgMobile: string;
  }
}
