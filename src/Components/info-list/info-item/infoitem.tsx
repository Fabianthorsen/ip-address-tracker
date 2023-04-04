import { FunctionComponent } from "react";

import { fromCamelCaseToWords } from "../../../helpers/stringHelpers";
import Info from "../../../shared/interfaces/info.interface";

interface InfoItemProps {
  info: Info;
  className?: string;
}

const InfoItem: FunctionComponent<InfoItemProps> = ({
  info: { title, content },
  className,
}) => {
  return (
    <li className={className}>
      <p className="text-2xs font-bold text-gray-500 tracking-widest">
        {fromCamelCaseToWords(title).toLocaleUpperCase()}
      </p>
      <h2 className="font-bold">{content}</h2>
    </li>
  );
};

export default InfoItem;
