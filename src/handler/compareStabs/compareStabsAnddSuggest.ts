import { getStabsBdd } from "../getStabsBdd";
import type { Suggestion } from "../../types/SearchBoxTypes";


export async function compareStabs(
  suggestions: Suggestion[]
): Promise<Suggestion[]> {
  try {
    if (suggestions.length > 0) {
      const stabRes: Suggestion[] = await getStabsBdd(suggestions);
      const values = Object.values(stabRes);
      return values;
    } else {
      return []; // Return an empty array if suggestions.length is not greater than 0
    }
  } catch (err) {
    console.log(err);
    throw err; // Throw the error to propagate it further
  }
}
