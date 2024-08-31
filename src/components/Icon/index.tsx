import { useTheme } from "styled-components";
import * as Icons from "./icons";

export type IconName = keyof typeof Icons;

type IconProps = {
  name: IconName;
  color?: string;
  size?: number;
};

function Icon({ name, color, size = 24 }: IconProps) {
  const theme = useTheme();

  const _color = color ?? theme.text100;

  const Comp = Icons[name];

  return <Comp color={_color} width={size} height={size} />;
}

export default Icon;
