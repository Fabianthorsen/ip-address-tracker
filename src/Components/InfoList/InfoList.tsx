import { FunctionComponent } from "react";
import { GeoData } from "../../shared/interfaces/info.interface";
import InfoItem from "./InfoElement/InfoItem";

interface InfoCardProps {
  geoData: GeoData;
}

const InfoList: FunctionComponent<InfoCardProps> = ({ geoData }) => {
  return (
    <ul>
      {Object.keys(geoData).map((key) => (
        <InfoItem
          key={key}
          info={{ title: key, content: geoData[key as keyof GeoData] }}
        />
      ))}
    </ul>
  );
};

export default InfoList;
