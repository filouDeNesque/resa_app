import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import DashboardContext from "~/context/dashboard/dashboard.context";
import { type Horse } from "~/types/Horse.type";
import { type Stabs } from "~/types/stabs";
import PageTransport from "./PageTransport";
import { ThHeader } from "./ThHeader";
import Trbody from "./TrBody";
import Style from "./style.module.css";
import type { Horseitem, Stabsitem } from "./tableListe.interface";

const TableListe = ({
}) => {
    const {
        menuType,
        horseData,
        stabsData,
        deleteHorseById,
        horseByHalfLeaseByUserId,
        horseByUserId,
        stabByHorseStabId
    } = useContext(DashboardContext)
    const titleColumnTabStabList: string[] = [
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
    const titleColumnTabHorseListe: string[] = [
        "Nom",
        "Taille",
        "Ecurie",
        "Date de naissance",
        "Editer",
        "Suprimer"
    ]
    const [SelectedTabMenu, setHeaderMenu] = useState<string[]>(titleColumnTabStabList)
    const [contentTable, setContentTable] = useState<Horseitem[] | Stabsitem[]>([])
    const { data: session } = useSession();
    const userId: string = session?.user?.id ?? ""

    useEffect(() => {
        if (menuType === "horseListe") {
            horseByUserId(userId).catch((error) => {
                console.log(error)
            })
            setHeaderMenu(titleColumnTabHorseListe)
        } else if (menuType === "stabListe") {
            //!Fonction très complexe à revoire
            setHeaderMenu(titleColumnTabStabList)
            if (Array.isArray(horseData)) {
                const stabId: (string | null)[] = horseData.map((horse: Horse) => horse.stabId);
                const filteredStabId: string[] = stabId.filter((value) => value !== null && value !== undefined) as string[];
                stabByHorseStabId(filteredStabId).catch((error) => {
                    console.log(error);
                });
            }

        } else if (menuType === "halfLeaseUserList") {
            horseByHalfLeaseByUserId(userId).catch((error) => {
                console.log(error)
            })
            setHeaderMenu(titleColumnTabHorseListe)
        }
        else if (menuType === "Activities") {
            //todo: make something 
            console.log("Menu Activities")
        }
        else if (menuType === "Annonces") {
            //todo: make something 
            console.log("Menu Annonces")
        }
        else if (menuType === "Contracts") {
            //todo: make something 
            console.log("Menu Contracts")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menuType])

    useEffect(() => {
        if (menuType === "horseListe" || menuType === "halfLeaseUserList") {
            if (Array.isArray(horseData) && contentTable) {
                setContentTable(formatHorseData(horseData))
            }
        } else if (menuType === "stabListe") {
            if (Array.isArray(stabsData) && contentTable) {
                setContentTable(formatStabData(stabsData))
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [horseData, stabsData])

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
                                    UseHorseDeleteByIdData={deleteHorseById}
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