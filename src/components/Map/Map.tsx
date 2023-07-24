import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import type {
  ActionBoxProps,
  Suggestion,
} from "../SearchBox/types/SearchBoxTypes";

const map: React.FC<ActionBoxProps> = (suggestions) => {
  const map = {
    width: "100%",
    height: "70vh",
  };

  return (
    <MapContainer
      className="mt-10 border-2 pt-2 h-full  "
      style={map}
      center={[51.505, -0.09]}
      zoom={6}
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
