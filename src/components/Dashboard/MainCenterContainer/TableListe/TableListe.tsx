import Style from "./style.module.css"
import Trbody from "./TrBody";
import PageTransport from "./PageTransport";
import type { item } from "./tableListe.interface"
import { useHorseData } from "~/hooks/useHorseData";
import { type Horse } from "~/types/Horse.type";

const TableListe = () => {
    const {
        horseData,
        UseHorseDeleteByIdData
    } = useHorseData();

    let horseItems: item[] = [];
    if (Array.isArray(horseData) && horseItems) {
        horseItems = horseData.map((item: Horse) => ({
            id: item?.id,
            name: item?.name,
            size: item?.size.toString() + "m",
            birthDate: item?.birthDate.toString(),
            stab: item?.stabId != null ? item?.stabId : ""
        }));
    }

    return (
        <div id="table-container" className={Style.tableContainer}>
            <table className={Style.table}>
                <thead className={Style.thead}>
                    <tr>
                        <th scope="col" className={Style.theadTh} >Name</th>
                        <th scope="col" className={Style.theadTh}>Size</th>
                        <th scope="col" className={Style.theadTh}>Stab</th>
                        <th scope="col" className={Style.theadTh}>Birth-Date</th>
                        <th scope="col" className={Style.theadTh}>Edit</th>
                        <th scope="col" className={Style.theadTh}>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {horseItems.length > 0 && horseItems.map((items, index) => {
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