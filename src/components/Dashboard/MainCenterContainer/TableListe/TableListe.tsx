import Image from "next/image";
import Edit from "../../../../../public/images/icone/update.png";
import Delete from "../../../../../public/images/icone/Delete.png";
import Style from "./style.module.css"
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
                            <th scope="col" className={Style.theadTh}></th>
                            <th scope="col" className={Style.theadTh}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={Style.trBody}>
                            <th scope="row" className={Style.thBody}>Ermine du ti-bonheur</th>
                            <td className={Style.tdbody}>1,45m</td>
                            <td className={Style.tdbody}>Ecurie de la Palisse</td>
                            <td className={Style.tdbody}>12/09/24</td>
                            <td className={Style.tdbody}>
                                <Image
                                    src={Edit}
                                    alt="Icon"
                                    width={20}
                                    height={20}
                                    className={Style.image}>
                                </Image>
                            </td>
                            <td className={Style.tdbody}>
                                <Image
                                    src={Delete}
                                    alt="Icon"
                                    width={20}
                                    height={20}
                                    className={Style.image}>
                                </Image>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div id="page-changer">
                    <div className="flex justify-center p-2">
                        <a href="#" className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Previous
                        </a>
                        <a href="#" className="flex items-center justify-center px-3 h-8 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Next
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableListe;