import React from "react";
import InputBox from "./inputBox";

interface Suggestion {
  place_id: string;
  display_name: string;
}

const SearchBox = () => {
  const [inputSearch, setInputSearch] = React.useState("");
  const [debounced, setDebounced] = React.useState("");
  const [suggestions, setSuggestions] = React.useState<Suggestion[]>([]);

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
          console.log(data);
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
        suggestions= {suggestions}
      />
      <ul className="space-y-4 pt-2 text-left text-gray-500 dark:text-gray-400">
        {suggestions.map((suggestion) => (
          <li key={suggestion.place_id} className="flex items-center space-x-3">
            <svg
              className="h-3.5 w-3.5 flex-shrink-0 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span> {suggestion.display_name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchBox;
