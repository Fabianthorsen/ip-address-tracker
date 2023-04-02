import { FunctionComponent } from "react";
import { createObjectsFromObject } from "../../helpers/infoHelpers";
import { GeoData, Info } from "../../shared/interfaces/info.interface";
import InfoItem from "./info-item/InfoItem";

interface InfoCardProps {
  geoData: GeoData;
}

const InfoList: FunctionComponent<InfoCardProps> = ({ geoData }) => {
  const items = createObjectsFromObject<GeoData>(geoData, ["coordinates"]);
  return (
    <ul className="text-center">
      {items.map((entry) => {
        return (
          <InfoItem
            className="py-2"
            key={String(entry.key)}
            info={{ title: String(entry.key), content: String(entry.value) }}
          />
        );
      })}
    </ul>
  );
};

export default InfoList;
