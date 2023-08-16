import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import useHome from "~/layout/home/home.context";
import type { Stabs } from "~/types/stabs";
import {
  greenMarkerIcon,
  redMarkerIcon,
} from "../../libs/map/marker/markerIcon";

const Map: React.FC = () => {
  const { stabs, user } = useHome();
  const filteredObjects = stabs.filter((obj) => {
    return (
      obj.lat !== undefined &&
      obj.lon !== undefined &&
      obj.lat !== null &&
      obj.lon !== null
    );
  });

  const map = {
    width: "100%",
    height: "100%",
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
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/attribution">CARTO</a>'
      />

      {filteredObjects.map((stab: Stabs) => (
        <Marker
          key={stab.id}
          icon={greenMarkerIcon}
          position={[
            stab.lat !== null && stab.lat !== undefined
              ? parseFloat(stab.lat.toString())
              : 0,
            stab.lon !== null && stab.lon !== undefined
              ? parseFloat(stab.lon.toString())
              : 0,
          ]}
        >
          <Popup>
            <h2>{stab.name}</h2>
          </Popup>
        </Marker>
      ))}

      <Marker
        position={[user.position.lat, user.position.lon]}
        icon={redMarkerIcon}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
