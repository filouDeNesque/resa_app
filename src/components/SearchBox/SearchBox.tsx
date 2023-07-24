import React from "react";
import InputBox from "./inputBox";
import type { Suggestion, SearchBoxProps } from "./types/SearchBoxTypes";

const SearchBox: React.FC<SearchBoxProps> = ({ suggestions, setSuggestions }) => {
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
  }, [inputSearch, 500]);

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
        })
        .catch((error) => {
          console.error("Erreur lors de l'appel API :", error);
        });
    } else {
      setSuggestions([]);
    }
  }, [debounced]);

  return (
    <>
      <h3>SearchBox</h3>
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
