import { FunctionComponent } from "react";
import { GeoData } from "../../shared/interfaces/info.interface";
import InfoItem from "./info-item/InfoItem";

interface InfoCardProps {
  geoData: GeoData;
}

const InfoList: FunctionComponent<InfoCardProps> = ({
  geoData: { ip, location, timezone, isp },
}) => {
  return (
    <ul>
      <InfoItem key={ip} info={{ title: "ip", content: ip }} />
      <InfoItem
        key={location}
        info={{ title: "location", content: location }}
      />
      <InfoItem
        key={timezone}
        info={{ title: "timezone", content: timezone }}
      />
      <InfoItem key={isp} info={{ title: "isp", content: isp }} />
    </ul>
  );
};

export default InfoList;
