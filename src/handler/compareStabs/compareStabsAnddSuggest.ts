import { getStabsBdd } from "../getStabsBdd";
import type { Suggestion } from "../../components/SearchBox/types/SearchBoxTypes";

export function compareStabs(suggestions: Suggestion[]) {
  (async () => {
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

        return Object.values(stabRes);
      }
    } catch (err) {
      console.log(err);
    }
  })()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
}
