import Image from "next/image";
import Delete from "../../../../../public/images/icone/Delete.png";
import Edit from "../../../../../public/images/icone/update.png";
import Style from "./style.module.css";
import { type Horseitem, type Stabsitem } from "./tableListe.interface";

interface trBodyProps {
    itemHorse: Horseitem;
    itemStabs: Stabsitem;
    UseHorseDeleteByIdData: (horseId: string) => Promise<void>;
}
const Trbody: React.FC<trBodyProps> = ({ itemHorse, itemStabs, UseHorseDeleteByIdData }) => {
    const handleDeleteClick = (id: string) => {
        console.log("HandleClick", id)
        UseHorseDeleteByIdData(id).catch((error) => {
            console.log(error)
        })
    }

    return (
        <tr className={Style.trBody as string}>
            {itemStabs && itemStabs.adresse &&
                <>
                    <th scope="row" className={Style.tdBody}>{itemStabs.name}</th>
                    <td className={Style.tdBody}>{itemStabs.adresse}</td>
                    <td className={Style.tdBody}>{itemStabs.codePostal}</td>
                    <td className={Style.tdBody}>{itemStabs.city}</td>
                    <td className={Style.tdBody}>{itemStabs.country}</td>
                    <td className={Style.tdBody}>{itemStabs.telephone}</td>
                    <td className={Style.tdBody}>{itemStabs.Site}</td>
                </>
            }

            {itemHorse &&
                <>
                    <th scope="row" className={Style.tdBody}>{itemHorse.name}</th>
                    <td className={Style.tdBody}>{itemHorse.size}</td>
                    <td className={Style.tdBody}>{itemHorse.stab}</td>
                    <td className={Style.tdBody}>{itemHorse.birthDate}</td>
                </>
            }

            <td className={Style.tdBody}>
                <Image
                    src={Edit}
                    alt="Icon"
                    width={20}
                    height={20}
                    className={Style.image}>
                </Image>
            </td>
            <td className={Style.tdBody} onClick={() => handleDeleteClick(itemHorse.id)}>
                <Image
                    src={Delete}
                    alt="Icon"
                    width={20}
                    height={20}
                    className={Style.image}>
                </Image>
            </td>
        </tr>
    );
};

export default Trbody;

