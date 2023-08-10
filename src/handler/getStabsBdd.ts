import type { Suggestion } from "~/components/SearchBox/types/SearchBoxTypes";
import type { Stabs } from "./types/stabs";

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

  //fetch api
  return fetch(`api/Stabs/read`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(map_id),
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

  const suggestType: Suggestion[] = suggestion.map((arg: Suggestion) => {
    if (ids && arg.place_id && ids.includes(arg.place_id.toString())) {
      return {
        ...arg,
        marker: "Ecurie",
      };
    } else {
      return { ...arg };
    }
  });
  return suggestType;
}
