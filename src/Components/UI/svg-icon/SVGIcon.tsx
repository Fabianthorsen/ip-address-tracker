import { FunctionComponent } from "react";

interface SVGIconProps {
  src: string;
}

const SVGIcon: FunctionComponent<SVGIconProps> = ({ src }) => {
  return <img src={src} alt="svg icon" />;
};

export default SVGIcon;
