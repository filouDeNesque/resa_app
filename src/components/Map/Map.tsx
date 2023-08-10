import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import type { MapProps, Suggestion } from "../SearchBox/types/SearchBoxTypes";

const map: React.FC<MapProps> = (suggestions) => {
  const map = {
    width: "100%",
    // height: "30em",
    height: "100%",
  };

  const redMarkerIcon = new Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  // Création d'un marqueur vert
  const greenMarkerIcon = new Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  // Création d'un marqueur bleu
  const blueMarkerIcon = new Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  // Création d'un marqueur d'une autre couleur (par exemple, orange)
  const orangeMarkerIcon = new Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  function getIcon(marker) {
    console.log(marker)
    if (marker === "Ecurie") {
      return greenMarkerIcon;
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
          icon={getIcon(suggestion)}
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
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default map;
