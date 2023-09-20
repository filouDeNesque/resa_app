import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useReducer } from "react";
import type { Stabs } from "~/types/stabs";
import stabsReducer, { handleReadStabs, initialState } from "./home.reducer";

const HomeContext = createContext(initialState);

//Type
type HomeContextProps = {
  children: ReactNode;
};

type Location = {
  latitude: number;
  longitude: number;
};

export const HomeProvider: React.FC<HomeContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(stabsReducer, initialState);

  const getAllStabs = async () => {
    const stabs: Stabs[] = await handleReadStabs(
      state.user.position.lon,
      state.user.position.lat
    );
    dispatch({ type: "getStabs", payload: { ...state, stabs: stabs } });
  };

  const updateUserPosition = (location: Location) => {
    dispatch({
      type: "setUserPosition",
      payload: {
        ...state,
        user: {
          ...state.user,
          position: {
            lat: location.latitude,
            lon: location.longitude,
          },
        },
      },
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const location = await geolocUser();
        console.log("Localisation récupérée:", location);
        updateUserPosition(location);
        await getAllStabs();
      } catch (error) {
        console.error("Une erreur s'est produite:", error);
      }
    };

    fetchData().catch((error) => {
      console.log(error);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const value = {
    stabs: state.stabs,
    user: state.user,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

const useHome = () => {
  const context = useContext(HomeContext);

  if (context === undefined) {
    throw new Error("useHome must be used within HomeContext");
  }

  return context;
};

export default useHome;

const geolocUser = () => {
  return new Promise<Location>((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          console.error("Erreur de géolocalisation:", error);
          reject(error);
        }
      );
    } else {
      console.log("La géolocalisation n'est pas supportée par ce navigateur.");
      reject("Géolocalisation non supportée");
    }
  });
};
