import Style from "./style.module.css"
import Trbody from "./TrBody";
import PageTransport from "./PageTransport";
import type { item } from "./tableListe.interface"

const TableListe = () => {
    return (
        <>
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

                        {Horseitems.map((items, index) => {
                            return (
                                <>
                                    <Trbody item={items} key={index} />
                                </>
                            )
                        })}
                    </tbody>
                </table>
                <PageTransport />
            </div>
        </>
    );
};

export default TableListe;



const Horseitems: item[] = [
    { id: "12", name: "Ermine du tibohneur", size: "1,53m", stab: "Ecurie du ballon", birthDate: "11/12/21" },
    { id: "134", name: "Filou de Nesque", size: "1,80m", stab: "Ecurie de Londre", birthDate: "11/12/02" },
]

//TODO:import item