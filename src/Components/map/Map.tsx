import { Icon, LatLngExpression } from "leaflet";
import { FunctionComponent, useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

import locationIcon from "../../assets/icon-location.svg";
import "./Map.styles.css";

interface MapProps {
  coordinates: { lat: number; lng: number };
}

const Map: FunctionComponent<MapProps> = ({ coordinates }) => {
  const [markerPosition, setMarkerPosition] = useState(coordinates);
  const markerRef = useRef(null);
  const mapCenter: LatLngExpression = [
    coordinates.lat + 0.0015,
    coordinates.lng,
  ];
  const zoom = 15;

  useEffect(() => {
    setMarkerPosition(coordinates);
  }, [coordinates]);

  function SetViewOnClick({ coords }: { coords: LatLngExpression }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
  }

  return (
    <MapContainer
      className="map h-full"
      center={mapCenter}
      zoom={zoom}
      zoomControl={false}
      doubleClickZoom={false}
      trackResize={false}
      attributionControl={false}
      touchZoom={false}
      maxZoom={zoom}
      minZoom={zoom}
      dragging={false}
    >
      <TileLayer
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={markerPosition} ref={markerRef}>
        <SetViewOnClick coords={markerPosition} />
      </Marker>
    </MapContainer>
  );
};

export default Map;
