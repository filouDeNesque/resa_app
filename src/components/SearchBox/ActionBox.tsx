import type { ActionBoxProps } from "./types/SearchBoxTypes";

const ActionBox: React.FC<ActionBoxProps> = ({ suggestions }) => {
  return (
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
  );
};
export default ActionBox;
