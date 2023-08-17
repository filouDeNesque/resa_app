import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import useHome from "~/layout/home/home.context";
import type { Stabs } from "~/types/stabs";
import {
  stabsIcon,
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

  const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicGN1cXVlbXkiLCJhIjoiY2txNW82c3hlMGQxODJ2cW80a20wdXVhaCJ9.Xa-faAijdGvYFWDsKC-Zzw'; // Remplacez par votre clé Mapbox
  const MAPBOX_STYLE_ID = 'pcuquemy/cllea02pv012401pdhz1cbtqg'

  const tileUrl = `https://api.mapbox.com/styles/v1/${MAPBOX_STYLE_ID}/tiles/{z}/{x}/{y}@2x?access_token=${MAPBOX_ACCESS_TOKEN}`;


  return (
    <MapContainer
      className="sticky top-0"
      style={map}
      center={[user.position.lat, user.position.lon]}
      zoom={11}
      scrollWheelZoom={true}
    >
      {/* <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/attribution">CARTO</a>'
      /> */}
      <TileLayer
        url={tileUrl}
        attribution='&copy; <a href="https://carto.com/attribution">CARTO</a>'
      />

      {filteredObjects.map((stab: Stabs) => (
        <Marker
          key={stab.id}
          icon={stabsIcon}
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
            <div className="p-2">
              <h2 className="text-lg font-semibold">{stab.name}</h2>
              <p className="mt-2 text-gray-600">
                {stab.StreetAddress}, {stab.PostalCode} {stab.AddressLocality},{" "}
                {stab.AddressCountry}
              </p>
              <p className="mt-1 text-gray-600">Téléphone: {stab.Telephone}</p>
              {stab.Site && (
                <a
                  href={stab.Site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-blue-600"
                >
                  Site Web
                </a>
              )}
              <div className="mt-3">
                <a
                  href={`https://www.google.com/maps?q=${stab.lat ?? 0},${
                    stab.lon ?? 0
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Voir sur la carte
                </a>
              </div>
            </div>
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
