import { DefaultTheme } from './../node_modules/@types/styled-components/index.d.ts';
import 'styled-components';
import theme from '.';

declare module 'styled-components' {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType {}
}