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
      fetchResearch(debounced, suggestions, setSuggestions).catch((errors) => {
        console.log(errors);
      });
    } else {
      setSuggestions([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export async function fetchData(
  suggestions: Suggestion[],
  setSuggestions: React.Dispatch<React.SetStateAction<Suggestion[]>>
) {
  try {
    if (suggestions.length > 0) {
      const stabRes: Suggestion[] = await getStabsBdd(suggestions)
        .then((el) => {
          return { ...el };
        })
        .then((data) => {
          return Object.values(data);
        })
        .catch((error) => {
          console.log(error);
        });

      const arrstabres = Object.values(stabRes);
      if (arrstabres.length > 0) {
        console.log("arrstabres");
        console.log(arrstabres);
        setSuggestions(stabRes);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export async function fetchResearch(
  debounced: string,
  suggestions: Suggestion[],
  setSuggestions: React.Dispatch<React.SetStateAction<Suggestion[]>>
) {
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
    })
    .catch((error) => {
      console.error("Erreur lors de l'appel API :", error);
    });
  await fetchData(suggestions, setSuggestions);
}
