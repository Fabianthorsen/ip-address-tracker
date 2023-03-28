import { FunctionComponent } from "react";
import Info, { GeoData } from "../../../shared/interfaces/info.interface";

interface InfoItemProps {
  info: Info;
}

const InfoItem: FunctionComponent<InfoItemProps> = ({
  info: { title, content },
}) => {
  return (
    <li>
      <p className="text-xs">{title.toLocaleUpperCase()}</p>
      <h2 className="font-bold">{content}</h2>
    </li>
  );
};

export default InfoItem;
