import Image from "next/image";
import Edit from "../../../../../public/images/icone/update.png";
import Delete from "../../../../../public/images/icone/Delete.png";
import Style from "./style.module.css"
import { type item } from "./tableListe.interface";

interface trBodyProps{
    item:item;
}
const Trbody:React.FC<trBodyProps> = ({item}) => {
    
    return (
        <>
                <tr className={Style.trBody as string}>
                    <th scope="row" className={Style.tdBody}>{item.name}</th>
                    <td className={Style.tdBody}>{item.size}</td>
                    <td className={Style.tdBody}>{item.stab}</td>
                    <td className={Style.tdBody}>{item.birthDate}</td>
                    <td className={Style.tdBody}>
                        <Image
                            src={Edit}
                            alt="Icon"
                            width={20}
                            height={20}
                            className={Style.image}>
                        </Image>
                    </td>
                    <td className={Style.tdBody}>
                        <Image
                            src={Delete}
                            alt="Icon"
                            width={20}
                            height={20}
                            className={Style.image}>
                        </Image>
                    </td>
                </tr>
        </>
    );
};

export default Trbody;

