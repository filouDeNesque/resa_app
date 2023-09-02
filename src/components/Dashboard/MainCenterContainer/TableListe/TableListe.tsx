import { useEffect, useState } from "react";
import { type Horse } from "~/types/Horse.type";
import PageTransport from "./PageTransport";
import { ThHeader } from "./ThHeader";
import Trbody from "./TrBody";
import Style from "./style.module.css";
import type { Horseitem, Stabsitem } from "./tableListe.interface";
import { useSession } from "next-auth/react";

type tableListeProps = {
    menuType: 'horseListe' | 'stabListe' | 'halfLeaseUserList'
    horseData: Horse | Horse[] | null
    UseHorseDeleteByIdData: (horseId: string) => Promise<void>
    UseHorseByhalfLeaseUserIdData: (halfLeaseUserId: string) => Promise<void>
    UseHorseByUserIdData: (userId: string) => Promise<void>
}

const TableListe: React.FC<tableListeProps> = ({ menuType, horseData, UseHorseDeleteByIdData, UseHorseByhalfLeaseUserIdData, UseHorseByUserIdData }) => {
    const titleTabStabList: string[] = [
        "Nom",
        "Adresse",
        "Code Postal",
        "Ville",
        "Pays",
        "Telephone",
        "Site",
    ]
    const titleTabHorseListe: string[] = [
        "Nom",
        "Taille",
        "Ecurie",
        "Date de naissance",
        "Editer",
        "Suprimer"
    ]
    const [SelectedTabMenu, setHeaderMenu] = useState<string[]>(titleTabStabList)
    const [contentTable, setContentTable] = useState<Horseitem[] | Stabsitem[]>([])
    const { data: session } = useSession();
    const userId: string = session?.user?.id ?? ""

    console.log("utilisation de table Liste component")

    useEffect(() => {
        if (menuType === "horseListe") {
            console.log("menu change horseliste")
            UseHorseByUserIdData(userId).catch((error) => {
                console.log(error)
            })
            setHeaderMenu(titleTabHorseListe)
        } else if (menuType === "stabListe") {
            console.log("menu change stabliste")
            setHeaderMenu(titleTabStabList)
            setContentTable([])
        } else if (menuType === "halfLeaseUserList") {
            console.log("menu change halfleaseUserList")
            UseHorseByhalfLeaseUserIdData(userId).catch((error) => {
                console.log(error)
            })
            setHeaderMenu(titleTabHorseListe)
        }
    }, [menuType])

    useEffect(() => {
        if (menuType === "horseListe" || menuType === "halfLeaseUserList") {
            if (Array.isArray(horseData) && contentTable) {
                setContentTable(formatHorseData(horseData))
            }
        } else if (menuType === "stabListe") {
            setContentTable([])
        }
    }, [horseData])

    return (
        <div id="table-container" className={Style.tableContainer}>
            <table className={Style.table}>
                <thead className={Style.thead}>
                    <tr>
                        {SelectedTabMenu.map((key) => (
                            <ThHeader key={key} content={key} />
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {contentTable.length > 0 && contentTable.map((items, index) => {
                        return (
                            <>
                                <Trbody
                                    key={`${items.id}-${index}-${items.birthDate}`}
                                    item={items}
                                    UseHorseDeleteByIdData={UseHorseDeleteByIdData}
                                />
                            </>
                        )
                    })}
                </tbody>
            </table>
            <PageTransport />
        </div>
    );
};

export default TableListe;

function formatHorseData(horseData: Horse[]) {
    return horseData.map((item: Horse) => ({
        id: item?.id,
        name: item?.name,
        size: item?.size.toString() + "m",
        birthDate: item?.birthDate.toString(),
        stab: item?.stabId != null ? item?.stabId : ""
    }))
}

// ! Reducer non utilisé
interface State {
    titleTabStabList: string[];
    titleTabHorseListe: string[];
    SelectedTabMenu: string[];
    contentTable: Horseitem[] | Stabsitem[]
}

interface Action {
    type: string;
    payload: {
        titleTabStabList: string[];
        titleTabHorseListe: string[];
        SelectedTabMenu: string[];
        contentTable: Horseitem[] | Stabsitem[]
    };
}

export const initialState: State = {
    titleTabStabList: [],
    titleTabHorseListe: [],
    SelectedTabMenu: [],
    contentTable: []
};

function tableListeReducer(state: State, action: Action): State {
    const { type, payload } = action;
    switch (type) {
        case "getsomething":
            console.log('test')
            return state;
        default:
            return state;
    }
}