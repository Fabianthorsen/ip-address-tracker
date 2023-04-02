import { FunctionComponent } from "react";
import { GeoData } from "../../shared/interfaces/info.interface";
import InfoItem from "./info-item/InfoItem";

interface InfoCardProps {
  geoData: GeoData;
}

const InfoList: FunctionComponent<InfoCardProps> = ({
  geoData: { ip, location, timezone, isp },
}) => {
  const itemClass = "py-2";
  // TODO: Find a good way to loop over object
  return (
    <ul className="text-center">
      <InfoItem
        key={ip}
        info={{ title: "ip address", content: ip }}
        className={itemClass}
      />
      <InfoItem
        key={location}
        info={{ title: "location", content: location }}
        className={itemClass}
      />
      <InfoItem
        key={timezone}
        info={{ title: "timezone", content: timezone }}
        className={itemClass}
      />
      <InfoItem
        key={isp}
        info={{ title: "isp", content: isp }}
        className={itemClass}
      />
    </ul>
  );
};

export default InfoList;
