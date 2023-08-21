import { useState, useEffect } from "react";
import type { User } from "~/types/User.type";


interface APIResponse<T> {
  data: T;
  message: string;
  // Vous pouvez ajouter d'autres propriétés spécifiques à la réponse API si nécessaire
}

const useUserData = (userId: string) => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);

        if (response.ok) {

          const responseData = await response.json() as APIResponse<User | null>

          if (responseData.data !== null && typeof responseData.data === 'object') {
            setUserData(responseData.data);
          }

        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData().catch((error) => {
      console.log(error)
    });
  }, [userId]);

  return userData;
};

export default useUserData;


// TODO: mise en place du hook update Data