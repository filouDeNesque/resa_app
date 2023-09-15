import Image from "next/image";
import { useState } from "react";
import AddICo from "../../../../public/images/icone/Add-icone.png";
import listeICo from "../../../../public/images/icone/icons8-liste-64.png";
import { type Menu } from "./leftsideContainer.interface";
import Style from "./style.module.css";
import { useHorseData } from "~/hooks/useHorseData";


type menuType = 'horseListe' | 'stabListe' | 'halfLeaseUserList'|'Activities'|'Annonces'|'Contracts'

interface ListeMenuProps {
    menu: Menu[];
    onMenuChange?: (newMenu: Menu[]) => void;
    onMenuItemClick?: (newContent: "form" | "table") => void
    changeMenu?: (menuName: menuType) => void;
}

export const ListeMenu: React.FC<ListeMenuProps> = ({ menu, onMenuChange, onMenuItemClick, changeMenu }) => {
    const [selectedItem, setSelectedItem] = useState<number | null>(0);
    const {
        UseHorseByhalfLeaseUserIdData
    } = useHorseData();

    const handleItemClick = (index: number, item: Menu) => {

        console.log("========item========")
        console.log("item level: ", item.level)
        console.log("item label: ", item.label)

        setSelectedItem(index);
        if (item.level == 2 && onMenuItemClick) {
            if (item.label === "table") {
                onMenuItemClick("table")
            } else {
                onMenuItemClick("form")
            }
        }
        if (item.level == 1 && onMenuChange) {
            if (item.label == "Horse") {
                onMenuChange(menuactionHorse);
                if (changeMenu) {
                    changeMenu("horseListe")
                }
            } else if (item.label == "Stable") {
                onMenuChange(menuactionPension);
                if (changeMenu) {
                    changeMenu("stabListe")
                }
            } else if (item.label == "halfLeaf") {
                onMenuChange(menuActionDemiPension);
                if (changeMenu) {
                    changeMenu("halfLeaseUserList")
                }
            } else if (item.label == "Activities") {
                onMenuChange(menuActionActivities);
                if (changeMenu) {
                    changeMenu(item.label)
                }
            } else if (item.label == "Annonces") {
                onMenuChange(menuActionAnnonces);
                if (changeMenu) {
                    changeMenu(item.label)
                }
            }
            else if (item.label == "Contracts") {
                onMenuChange(menuActionContracts);
                if (changeMenu) {
                    changeMenu(item.label)
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
                        onClick={() => handleItemClick(index, item)}
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
    { title: "Liste", icone: listeICo, level: 2, label: "table" },
    { title: "Add", icone: AddICo, level: 2, label: "formHorse" },
]


const menuactionPension: Menu[] = [
    { title: "Liste Pension", icone: listeICo, level: 2, label: "table" },
    { title: "Add Pension", icone: AddICo, level: 2, label: "formStab" },
]

const menuActionDemiPension: Menu[] = [
    { title: "Liste Demi Pension", icone: listeICo, level: 2, label: "table" }
]

const menuActionActivities: Menu[] = [
    { title: "Liste Activities", icone: listeICo, level: 2, label: "table" },
    { title: "New", icone: AddICo, level: 2, label: "formActivities" },

]

const menuActionAnnonces: Menu[] = [
    { title: "Liste Annonces", icone: listeICo, level: 2, label: "table" },
    { title: "New", icone: AddICo, level: 2, label: "formAnnonce" },

]

const menuActionContracts: Menu[] = [
    { title: "Liste Contracts", icone: listeICo, level: 2, label: "table" }
]
