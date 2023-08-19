// useUserData.ts

import { useState, useEffect } from "react";

const useUserData = (userId:string ) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [userId]);

  return userData;
};

export default useUserData;


// TODO: mise en place du hook update Data