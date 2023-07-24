import React, { ChangeEvent } from "react";

interface Suggestion {
  place_id: string;
  display_name: string;
}

interface InputBoxProps {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  suggestions: Suggestion[];
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder,
  value,
  onChange,
  suggestions,
}) => {
  return (
    <>
      <input
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-300 focus:outline-none focus:ring"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id="place"
        list="propalplace"
      />
      <datalist id="propalplace">
        {suggestions.map((suggestion) => (
          <option key={suggestion.place_id} value={suggestion.display_name} />
        ))}
      </datalist>
    </>
  );
};

export default InputBox;
