import { useState } from "react";
import { type Stabs } from "../types/stabs"

interface APIResponse<T> {
    data: T;
    message: string;
}

export const UseStabData = () => {
    const [stabdata, setStabData] = useState<Stabs | Stabs[] | null>(null)
    const [updateStatus, setUpdateStatus] = useState<boolean | null>(null);


    const UsegetStabByaArrayIdData = async (ids: string[]) => {
        try {
            const response = await fetch(`/api/Stabs/readbyarrayIds`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(ids),
            });

            if (response.ok) {
                setUpdateStatus(true);
                const responseData = await response.json() as APIResponse<Stabs | null>
                if (responseData.data !== null && typeof responseData.data === 'object') {
                    setStabData(responseData.data);
                }
            } else {
                setUpdateStatus(false);
            }
        } catch (error) {
            console.error(error);
            setUpdateStatus(false);
        }
    }

    //todo: add createStabData
    return {
        stabdata,
        updateStatus,
        UsegetStabByaArrayIdData
    }
}
