import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import type { Horse } from "~/types/Horse.type";

interface APIResponse<T> {
    data: T;
    message: string;
}
export const useHorseData = () => {
    const [horseData, setHorseData] = useState<Horse | Horse[] | null>(null);
    const [updateStatus, setUpdateStatus] = useState<boolean | null>(null);
    const { data: session } = useSession();
    const userId: string = session?.user?.id ?? ""

    console.log("utilisation de useHorseData")

    useEffect(() => {
        const fetchHorseData = async () => {
            try {
                const response = await fetch(`/api/horse/byUserId/${userId}`);
                if (response.ok) {
                    const responseData = await response.json() as APIResponse<Horse | null>
                    if (responseData.data !== null && typeof responseData.data === 'object') {
                        setHorseData(responseData.data);
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }

        if (userId) {
            fetchHorseData().catch((error) => {
                console.log(error)
            });
        }

    }, [setHorseData, userId, ])


    const useHorseByIdData = async (id: string) => {
        try {
            const response = await fetch(`/api/horse/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.ok) {
                const responseData = await response.json() as APIResponse<Horse | null>
                if (responseData.data !== null && typeof responseData.data === 'object') {
                    setHorseData(responseData.data);
                }
                setUpdateStatus(true);
            } else {
                setUpdateStatus(false);
            }
        } catch (error) {
            console.log(error)
            setUpdateStatus(false);
        }
    }

    const UseHorseByUserIdData = async (userId: string) => {
        try {
            const response = await fetch(`/api/horse/byUserId/${userId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.ok) {
                const responseData = await response.json() as APIResponse<Horse[] | null>
                if (responseData.data !== null && typeof responseData.data === 'object') {
                    setHorseData(responseData.data);
                }
                setUpdateStatus(true);
            } else {
                setUpdateStatus(false);
            }
        } catch (error) {
            console.log(error)
            setUpdateStatus(false);
        }
    }

    const useHorseByPlaceIdData = async (placeId: string) => {
        try {
            const response = await fetch(`/api/horse/byPlaceId/${placeId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.ok) {
                const responseData = await response.json() as APIResponse<Horse[] | null>
                if (responseData.data !== null && typeof responseData.data === 'object') {
                    setHorseData(responseData.data);
                }
                setUpdateStatus(true);
            } else {
                setUpdateStatus(false);
            }
        } catch (error) {
            console.log(error)
            setUpdateStatus(false);
        }
    }

    const useHorseByStabIdData = async (stabId: string) => {
        try {
            const response = await fetch(`/api/horse/byStabId/${stabId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.ok) {
                const responseData = await response.json() as APIResponse<Horse[] | null>
                if (responseData.data !== null && typeof responseData.data === 'object') {
                    setHorseData(responseData.data);
                }
                setUpdateStatus(true);
            } else {
                setUpdateStatus(false);
            }
        } catch (error) {
            console.log(error)
            setUpdateStatus(false);
        }
    }

    const UseHorseByhalfLeaseUserIdData = async (halfLeaseUserId: string) => {
        try {
            const response = await fetch(`/api/horse/byhalfLeaseUsersId/${halfLeaseUserId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.ok) {
                const responseData = await response.json() as APIResponse<Horse[] | null>
                if (responseData.data !== null && typeof responseData.data === 'object') {
                    setHorseData(responseData.data);
                }
                setUpdateStatus(true);
            } else {
                setUpdateStatus(false);
            }
        } catch (error) {
            console.log(error)
            setUpdateStatus(false);
        }
    }

    const useHorseGetAllData = async () => {
        try {
            const response = await fetch(`/api/horse/read`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.ok) {
                const responseData = await response.json() as APIResponse<Horse[] | null>
                if (responseData.data !== null && typeof responseData.data === 'object') {
                    setHorseData(responseData.data);
                }
                setUpdateStatus(true);
            } else {
                setUpdateStatus(false);
            }
        } catch (error) {
            console.log(error)
            setUpdateStatus(false);
        }
    }

    const UseHorseCreateData = async (horse: Horse) => {
        try {
            const response = await fetch(`/api/horse/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(horse),
            });

            if (response.ok) {
                setUpdateStatus(true);
                const responseData = await response.json() as APIResponse<Horse | null>
                if (responseData.data !== null && typeof responseData.data === 'object') {
                    setHorseData(responseData.data);
                }
            } else {
                setUpdateStatus(false);
            }
        } catch (error) {
            console.error(error);
            setUpdateStatus(false);
        }
    }

    const useHorseUpdateData = async (horse: Horse) => {
        try {
            const response = await fetch(`/api/horse/${horse.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(horse),
            });

            if (response.ok) {
                setUpdateStatus(true);
                const responseData = await response.json() as APIResponse<Horse | null>
                if (responseData.data !== null && typeof responseData.data === 'object') {
                    setHorseData(responseData.data);
                }
            } else {
                setUpdateStatus(false);
            }
        } catch (error) {
            console.error(error);
            setUpdateStatus(false);
        }
    }

    const UseHorseDeleteByIdData = async (horseId: string) => {
        try {
            const response = await fetch(`/api/horse/${horseId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (response.ok) {
                const responseData = await response.json() as APIResponse<Horse | null>
                if (responseData.data !== null && typeof responseData.data === 'object') {
                    setHorseData(responseData.data);
                }
                setUpdateStatus(true);
            } else {
                setUpdateStatus(false);
            }
        } catch (error) {
            console.log(error)
            setUpdateStatus(false);
        }
    }

    return {
        horseData,
        updateStatus,
        useHorseByIdData,
        UseHorseByUserIdData,
        useHorseByPlaceIdData,
        useHorseByStabIdData,
        UseHorseByhalfLeaseUserIdData,
        UseHorseCreateData,
        useHorseGetAllData,
        UseHorseDeleteByIdData,
        useHorseUpdateData
    }
}