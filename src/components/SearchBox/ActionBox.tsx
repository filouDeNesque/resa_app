import ListCity from "./List/ListCity";
import type { ActionBoxProps } from "./types/SearchBoxTypes";

const ActionBox: React.FC<ActionBoxProps> = ({ suggestions , setUpdateStore}) => {
  return (
    <div className=" flex flex-col max-h-96 my-2">
    {suggestions.map((suggestion) => (
      <div key={suggestion.osm_id} className="">
        <ListCity
          title={suggestion.display_name}
          suggestion={suggestion}
          setUpdateStore={setUpdateStore}
        />
      </div>
    ))}
  </div>
  );
};

export default ActionBox;
