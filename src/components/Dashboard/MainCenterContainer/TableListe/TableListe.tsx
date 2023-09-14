import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { type Horse } from "~/types/Horse.type";
import { type Stabs } from "~/types/stabs";
import PageTransport from "./PageTransport";
import { ThHeader } from "./ThHeader";
import Trbody from "./TrBody";
import Style from "./style.module.css";
import type { Horseitem, Stabsitem } from "./tableListe.interface";

type tableListeProps = {
    menuType: 'horseListe' | 'stabListe' | 'halfLeaseUserList'
    horseData: Horse | Horse[] | null
    UseHorseDeleteByIdData: (horseId: string) => Promise<void>
    UseHorseByhalfLeaseUserIdData: (halfLeaseUserId: string) => Promise<void>
    UseHorseByUserIdData: (userId: string) => Promise<void>
    UsegetStabByaArrayIdData: (ids: string[]) => Promise<void>
    stabdata: Stabs | Stabs[] | null
}

const TableListe: React.FC<tableListeProps> = ({
    menuType,
    horseData,
    UseHorseDeleteByIdData,
    UseHorseByhalfLeaseUserIdData,
    UseHorseByUserIdData,
    UsegetStabByaArrayIdData,
    stabdata }) => {
    const titleTabStabList: string[] = [
        "Nom",
        "Adresse",
        "Code Postal",
        "Ville",
        "Pays",
        "Telephone",
        "Site",
        "Modifier",
        "Supprimer"
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

    useEffect(() => {
        if (menuType === "horseListe") {
            UseHorseByUserIdData(userId).catch((error) => {
                console.log(error)
            })
            setHeaderMenu(titleTabHorseListe)
        } else if (menuType === "stabListe") {
            setHeaderMenu(titleTabStabList)
            if (Array.isArray(horseData)) {
                const stabId: (string | null)[] = horseData.map((horse: Horse) => horse.stabId);
                const filteredStabId: string[] = stabId.filter((value) => value !== null && value !== undefined) as string[];
                UsegetStabByaArrayIdData(filteredStabId).catch((error) => {
                    console.log(error);
                });
            }

        } else if (menuType === "halfLeaseUserList") {
            UseHorseByhalfLeaseUserIdData(userId).catch((error) => {
                console.log(error)
            })
            setHeaderMenu(titleTabHorseListe)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menuType])

    useEffect(() => {
        if (menuType === "horseListe" || menuType === "halfLeaseUserList") {
            if (Array.isArray(horseData) && contentTable) {
                setContentTable(formatHorseData(horseData))
            }
        } else if (menuType === "stabListe") {
            setContentTable(formatStabData(stabdata as Stabs[]))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [horseData, stabdata])

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
                                    key={`${items.id}-${index}`}
                                    itemHorse={items as Horseitem}
                                    itemStabs={items as Stabsitem}
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

function formatStabData(stabData: Stabs[]) { 
    return stabData.map((item: Stabs) => ({
        id: item?.id,
        name: item?.name,
        adresse: item.StreetAddress,
        codePostal: item.PostalCode,
        city: item.AddressLocality,
        country: item.AddressCountry,
        telephone: item.Telephone,
        Site: item.Site,
    }))
}