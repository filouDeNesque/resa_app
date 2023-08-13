import type { Stabs } from "../../handler/types/stabs";
import type { Suggestion } from "../../components/SearchBox/types/SearchBoxTypes";

export const transformStabsToSuggestion = (stab: Stabs): Suggestion => {
  const suggestion: Suggestion = {
    place_id: Number(stab.place_id), // Conversion en nombre
    licence: "",
    osm_type: "",
    osm_id: 0,
    boundingbox: ["", "", "", ""],
    lat: stab.lat ? stab.lat.toString() : "",
    lon: stab.lon ? stab.lon.toString() : "",
    display_name: stab.name, // Utilisation du nom de Stabs comme display_name
    class: "",
    type: "",
    importance: 0,
    address: {
      waterway: "",
      town: stab.AddressLocality,
      district: "",
      county: "",
      city: "",
      state: "",
      ISO3166_2_lvl4: "",
      country: stab.AddressCountry,
      country_code: "",
      postcode: stab.PostalCode,
    },
    geojson: {
      type: "Point",
      coordinates: [
        stab.lon ? parseFloat(stab.lon) : 0,
        stab.lat ? parseFloat(stab.lat) : 0,
      ],
    },
  };

  return suggestion;
};
