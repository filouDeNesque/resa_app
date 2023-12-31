import React from "react";
import type { InputBoxProps } from "../../types/SearchBoxTypes";

const InputBox: React.FC<InputBoxProps> = ({
  placeholder,
  value,
  onChange,
  suggestions,
}) => {
  return (
    <>
      <input
        className="my-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id="place"
        list="propalplace"
      />
      {Array.isArray(suggestions) && suggestions.length > 0 && (
        <datalist id="propalplace">
          {suggestions.map((suggestion) => (
            <option key={suggestion.place_id} value={suggestion.display_name} />
          ))}
        </datalist>
      )}
    </>
  );
};

export default InputBox;
