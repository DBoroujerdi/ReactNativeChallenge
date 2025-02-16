import * as React from "react";
import { SvgXml, XmlProps } from "react-native-svg";
import feather from "feather-icons";

export type FeatherProps = {
  name: keyof typeof feather.icons;
  size?: number;
} & Partial<XmlProps>;

export const Feather = ({ name, size, ...props }: FeatherProps) => (
  <SvgXml
    testID={`${name}-icon`}
    xml={feather.icons[name].toSvg()}
    width={size || 32}
    height={size || 32}
    {...props}
  />
);
