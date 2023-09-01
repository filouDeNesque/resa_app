import { useEffect, useState } from "react";
import { type Horse } from "~/types/Horse.type";
import PageTransport from "./PageTransport";
import { ThHeader } from "./ThHeader";
import Trbody from "./TrBody";
import Style from "./style.module.css";
import type { Horseitem, Stabsitem } from "./tableListe.interface";

type tableListeProps = {
    menuType: 'horseListe' | 'stabListe' | 'halfLeaseUserList'
    horseData: Horse | Horse[] | null
    UseHorseDeleteByIdData: (horseId: string) => Promise<void>
}

const TableListe: React.FC<tableListeProps> = ({ menuType, horseData, UseHorseDeleteByIdData }) => {
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
    const [headertabMenu, setHeaderMenu] = useState<string[]>(titleTabStabList)
    const [contentTable, setContentTable] = useState<Horseitem[] | Stabsitem[]>([])
    const [horseItems, setHorseItem] = useState<Horseitem[]>([])

    //? si le menu est HorseList
    useEffect(() => {
        if (Array.isArray(horseData) && horseItems) {
            setHorseItem(formatHorseData(horseData));
        }
    }, [menuType, horseData])
    //? si le menu est StabList
    //Todo
    const stabsItems: Stabsitem[] = [];

    //? si le menu est HalfLeafUser
    //Todo
    const HalfLeaseItems: Horseitem[] = [];

    useEffect(() => {
        if (menuType === "horseListe") {
            console.log("menu change horseliste")
            setHeaderMenu(titleTabHorseListe)
            if (Array.isArray(horseData) && horseItems) {
                setContentTable(formatHorseData(horseData))
            }
            console.log("===end====")
        } else if (menuType === "stabListe") {
            console.log("menu change stabliste")
            setHeaderMenu(titleTabStabList)
            setContentTable(stabsItems)
        } else if (menuType === "halfLeaseUserList") {
            console.log("menu change halfleaseUserList")
            setHeaderMenu(titleTabHorseListe)
            setContentTable(HalfLeaseItems)
        }
    }, [menuType])

    return (
        <div id="table-container" className={Style.tableContainer}>
            <table className={Style.table}>
                <thead className={Style.thead}>
                    <tr>
                        {headertabMenu.map((key) => (
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