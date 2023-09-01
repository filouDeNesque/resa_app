import Image from "next/image";
import { useState } from "react";
import AddICo from "../../../../public/images/icone/Add-icone.png";
import listeICo from "../../../../public/images/icone/icons8-liste-64.png";
import { type Menu } from "./leftsideContainer.interface";
import Style from "./style.module.css";

type menuType = 'horseListe' | 'stabListe' | 'halfLeaseUserList'

interface ListeMenuProps {
    menu: Menu[];
    onMenuChange?: (newMenu: Menu[]) => void;
    onMenuItemClick?: (newContent: "form" | "table") => void
    changeMenu?: (menuName: menuType) => void;

}

export const ListeMenu: React.FC<ListeMenuProps> = ({ menu, onMenuChange, onMenuItemClick, changeMenu }) => {
    const [selectedItem, setSelectedItem] = useState<number | null>(0);

    const handleItemClick = (index: number) => {
        setSelectedItem(index);
        if (onMenuItemClick) {
            if (index === 0) {
                onMenuItemClick("table")
            } if (index === 1) {
                onMenuItemClick("form")
            }
        }
        if (onMenuChange) {

            if (index === 0) {
                onMenuChange(menuactionHorse);
                if (changeMenu) {
                    changeMenu("horseListe")
                }
            } else if (index === 1) {
                onMenuChange(menuactionPension);
                if (changeMenu) {
                    changeMenu("stabListe")
                }
            } else if (index === 2) {
                onMenuChange(menuActionDemiPension);
                if (changeMenu) {
                    changeMenu("halfLeaseUserList")
                }
            }
        }
    };
    return (
        <>
            <ul className={Style.ulMenu}>

                {menu.map((item, index) => (
                    <li
                        key={index}
                        className={`${Style.liMenu as string} ${selectedItem === index ? Style.selected || "" : ""}`}
                        onClick={() => handleItemClick(index)}
                    >
                        <Image
                            src={item.icone}
                            alt="Icon"
                            width={20}
                            height={20}
                            className={Style.image}>
                        </Image>
                        {item.title}
                        {item.total !== undefined && item.total >= 0 && (
                            <div id="badge" className={Style.badge}>
                                {item.total}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
};



const menuactionHorse: Menu[] = [
    { title: "Liste", icone: listeICo },
    { title: "Add", icone: AddICo },
]


const menuactionPension: Menu[] = [
    { title: "Liste Pension", icone: listeICo },
    { title: "Add Pension", icone: AddICo },
]

const menuActionDemiPension: Menu[] = [
    { title: "Liste Demi Pension", icone: listeICo },
    { title: "Add Demi Pension", icone: AddICo },
]
