import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import type {
  MapProps,
  Suggestion,
} from "../SearchBox/types/SearchBoxTypes";

const map: React.FC<MapProps> = (suggestions) => {
  const map = {
    width: "100%",
    height: "30em",
  };

  return (
    <MapContainer
      className="sticky top-0"
      style={map}
      center={[47.505, 1.5]}
      zoom={5}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {suggestions.suggestions.map((suggestion: Suggestion) => (
        <Marker
          key={suggestion.place_id}
          position={[parseFloat(suggestion.lat), parseFloat(suggestion.lon)]}
        >
          <Popup>
            <h2>
              {suggestion.lat},{suggestion.lon}
            </h2>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
      <Marker position={[48.81157533584937, 2.384843105827418]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default map;
