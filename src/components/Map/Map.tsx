import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import type { MapProps, Suggestion } from "../SearchBox/types/SearchBoxTypes";
import {
  redMarkerIcon,
  stabsIcon,
} from "../../libs/map/marker/markerIcon";

const map: React.FC<MapProps> = (suggestions) => {
  const map = {
    width: "100%",
    height: "100%",
  };

  function getIcon(marker: string | undefined) {
    if (marker === "Ecurie") {
      return stabsIcon;
    }
    return redMarkerIcon;
  }

  return (
    <MapContainer
      className="sticky top-0"
      style={map}
      center={[47.505, 1.5]}
      zoom={5}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/attribution">CARTO</a>'
      />
      {suggestions.suggestions.map((suggestion: Suggestion) => (
        <Marker
          key={suggestion.place_id}
          icon={getIcon(suggestion.marker)}
          position={[parseFloat(suggestion.lat), parseFloat(suggestion.lon)]}
        >
          <Popup>
            <h2>{suggestion.display_name}</h2>
          </Popup>
        </Marker>
      ))}
      <Marker
        position={[48.81157533584937, 2.384843105827418]}
        icon={redMarkerIcon}
      >
        <Popup>
          Vous
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default map;
