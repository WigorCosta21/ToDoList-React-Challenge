import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textPrimary: string;
    textSecondary: string;
    textTitle: string;
    textHover: string;
    bgPrimary: string;
    border: string;
    bgSecondary: string;
    bgImgDesktop: string;
    bgImgMobile: string;
  }
}
