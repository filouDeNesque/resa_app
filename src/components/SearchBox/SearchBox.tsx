import React from "react";
import InputBox from "./inputBox";
import type { SearchBoxProps, Suggestion } from "./types/SearchBoxTypes";
import { getStabsBdd } from "../../handler/getStabsBdd";


const SearchBox: React.FC<SearchBoxProps> = ({
  suggestions,
  setSuggestions,
}) => {
  const [inputSearch, setInputSearch] = React.useState("");
  const [debounced, setDebounced] = React.useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounced(inputSearch);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [inputSearch, debounced]);

  React.useEffect(() => {
    if (debounced !== "") {
      fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          debounced
        )}&format=json&polygon_geojson=1&addressdetails=1`
      )
        .then((response) => response.json())
        .then((data: Suggestion[]) => {
          // Traitez les données reçues de l'API ici
          setSuggestions(data);
          //cherche si les addresses certifier existe
          fetchData(suggestions, setSuggestions);
        })
        .catch((error) => {
          console.error("Erreur lors de l'appel API :", error);
        });
    } else {
      setSuggestions([]);
    }
  }, [debounced, setSuggestions]);

  return (
    <>
      <InputBox
        placeholder="Saisissez votre texte ici..."
        value={inputSearch}
        onChange={handleInputChange}
        suggestions={suggestions}
      />
    </>
  );
};

export default SearchBox;

export async function fetchData(suggestions, setSuggestions) {
  try {
    console.log("suggestions.length");
    console.log(suggestions.length);
    if (suggestions.length > 0) {
      const stabRes: Suggestion[] = await getStabsBdd(suggestions)
        .then((el) => {
          console.log("stabRes el");
          console.log(...el);
          return { ...el };
        })
        .then((data) => {
          console.log("stabRes data");
          console.log(data);
          return Object.values(data);
        })
        .catch((error) => {
          console.log(error);
        });

      console.log("============stabs============");
      console.log(typeof stabRes);
      const arrstabres = Object.values(stabRes);
      console.log("arrstabres");
      console.log(arrstabres);
      console.log(stabRes.length);
      if (arrstabres.length > 0) {
        setSuggestions(stabRes);
      }
    }
  } catch (err) {
    console.log(err);
  }
}