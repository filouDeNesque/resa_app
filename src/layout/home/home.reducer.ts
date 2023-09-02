import type { Stabs } from "~/types/stabs";

//Interface
interface State {
  stabs: Stabs[];
  user: { position: { lon: number; lat: number } };
}

interface Action {
  type: string;
  payload: {
    stabs: Stabs[];
    user: { position: { lon: number; lat: number } };
  };
}

export const initialState: State = {
  stabs: [],
  user: { position: { lon: 48.8, lat: 2.3 } },
};

const stabsReducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case "getStabs":
      try {
        return {
          ...state,
          stabs: payload.stabs,
        };
      } catch (err) {
        console.log(err);
        return state;
      }
    case "setUserPosition":
      try {
        return {
          ...state,
          user: {
            ...state.user,
            position: {
              lat: payload.user.position.lat,
              lon: payload.user.position.lon,
            },
          },
        };
      } catch (err) {
        console.log(err);
        return state;
      }
    default:
      return state;
  }
};

export default stabsReducer;

// Fetch all Stabs data en utilisant la position de l'utilisateur

//Type
type ApiResponse<T> = {
  data: T;
};

const fetchStabs = async (lon: number, lat: number): Promise<Stabs[]> => {
  const position = { lon: lon, lat: lat };
  const response = await fetch(`api/Stabs/readAll`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(position),
  });

  const { data } = await convertToJson<Stabs[]>(response);
  return data;
};

//Utils
const convertToJson = async <T>(
  response: Response
): Promise<ApiResponse<T>> => {
  const data = (await response.json()) as T;
  return data as ApiResponse<T>;
};

//Handler
export const handleReadStabs = async (lon: number, lat: number) => {
  try {
    const stabs: Stabs[] = await fetchStabs(lon, lat);
    return stabs;
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
    return [];
  }
};
