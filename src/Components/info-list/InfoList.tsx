import { FunctionComponent } from "react";

import { createObjectsFromObject } from "../../helpers/infoHelpers";
import { GeoData } from "../../shared/interfaces/info.interface";
import InfoItem from "./info-item/InfoItem";

interface InfoCardProps {
  geoData: GeoData;
}

const InfoList: FunctionComponent<InfoCardProps> = ({ geoData }) => {
  const items = createObjectsFromObject<GeoData>(geoData, ["coordinates"]);
  return (
    <ul className="text-center md:flex md:justify-around md:divide-x-2">
      {items.map((entry) => {
        return (
          <InfoItem
            className="py-2 md:p-4"
            key={String(entry.key)}
            info={{ title: String(entry.key), content: String(entry.value) }}
          />
        );
      })}
    </ul>
  );
};

export default InfoList;
