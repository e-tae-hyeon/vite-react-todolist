/* eslint-disable @typescript-eslint/no-empty-object-type */
import "styled-components";
import { BaseTheme } from "../common/theme";

declare module "styled-components" {
  export interface DefaultTheme extends BaseTheme {}
}
