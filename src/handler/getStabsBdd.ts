import type { Suggestion } from "../types/SearchBoxTypes";
import type { Stabs } from "../types/stabs";

type Data = {
  message: object | string;
  data?: null | Stabs[];
};

export async function getStabsBdd(
  suggestions: Suggestion[]
): Promise<Suggestion[]> {
  const map_id = suggestions.map((suggestion) =>
    suggestion.place_id.toString()
  );

  const codePostal = suggestions.map((suggestion) => {
    return suggestion.address.postcode;
  });
  const lon = suggestions.map((suggestion) => {
    return parseFloat(suggestion.lon);
  });

  const lat = suggestions.map((suggestion) => {
    return parseFloat(suggestion.lat);
  });

  const dataFetch = {
    ids: map_id,
    lon: lon,
    lat: lat,
    codePostal: codePostal,
  }; //fetch api

  return fetch(`api/Stabs/read`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(dataFetch),
  })
    .then((res) => {
      return res.json();
    })
    .then((data: Data) => {
      const returnData: Suggestion[] = detectType(suggestions, data);
      return returnData;
    });
}

function detectType(suggestion: Suggestion[], data: Data): Suggestion[] {
  const ids = data.data?.map((map_id) => {
    return map_id.place_id;
  });
  const lon = data.data?.map((map_id) => {
    return map_id.lon;
  });
  const lat = data.data?.map((map_id) => {
    return map_id.lat;
  });

  const suggestType: Suggestion[] = suggestion.map((arg: Suggestion) => {
    if (
      ids?.includes(arg.place_id.toString()) ||
      lon?.includes(parseFloat(arg.lon)) ||
      lat?.includes(parseFloat(arg.lat))
    ) {
      return {
        ...arg,
        marker: "Ecurie",
      };
    } else {
      return { ...arg, marker: "unknow" };
    }
  });
  return suggestType;
}
