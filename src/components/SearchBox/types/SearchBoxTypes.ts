import type { ChangeEvent } from "react";

export interface Suggestion {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  boundingbox: [string, string, string, string];
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
  address: {
    waterway: string;
    town: string;
    district: string;
    county: string;
    city:string;
    state: string;
    ISO3166_2_lvl4: string;
    country: string;
    country_code: string;
    postcode: string;
  };
  geojson: {
    type: string;
    coordinates: [number, number][];
  };
  marker?: string;
}

export interface InputBoxProps {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  suggestions: Suggestion[];
}

export interface ActionBoxProps {
  suggestions: Suggestion[];
  setUpdateStore: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface MapProps {
  suggestions: Suggestion[];
}

export interface SearchBoxProps {
  suggestions: Suggestion[];
  setSuggestions: React.Dispatch<React.SetStateAction<Suggestion[]>>;
}
