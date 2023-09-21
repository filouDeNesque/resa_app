import Image from "next/image";
import { useContext, useState } from "react";
import DashboardContext from "~/layout/dashboard/dashboard.context";
import AddICo from "../../../../public/images/icone/Add-icone.png";
import listeICo from "../../../../public/images/icone/icons8-liste-64.png";
import { type Menu } from "./leftsideContainer.interface";
import Style from "./style.module.css";

interface ListeMenuProps {
    menu: Menu[];
    onMenuChange?: (newMenu: Menu[]) => void;
}

export const ListeMenu: React.FC<ListeMenuProps> = ({ menu, onMenuChange }) => {
    const { contentChange, menuTypeChange } = useContext(DashboardContext)
    const [selectedItem, setSelectedItem] = useState<number | null>(0);

    const handleItemClick = (index: number, item: Menu) => {
        setSelectedItem(index);
        if (item.level == 2 && contentChange) {
            if (item.label === "table") {
                contentChange("table")
            } else {
                contentChange("form")
            }
        }
        if (item.level == 1 && onMenuChange) {
            if (item.label == "Horse") {
                onMenuChange(menuactionHorse);
                if (menuTypeChange) {
                    menuTypeChange("horseListe")
                }
            } else if (item.label == "Stable") {
                onMenuChange(menuactionPension);
                if (menuTypeChange) {
                    menuTypeChange("stabListe")
                }
            } else if (item.label == "halfLeaf") {
                onMenuChange(menuActionDemiPension);
                if (menuTypeChange) {
                    menuTypeChange("halfLeaseUserList")
                }
            } else if (item.label == "Activities") {
                onMenuChange(menuActionActivities);
                if (menuTypeChange) {
                    menuTypeChange(item.label)
                }
            } else if (item.label == "Annonces") {
                onMenuChange(menuActionAnnonces);
                if (menuTypeChange) {
                    menuTypeChange(item.label)
                }
            }
            else if (item.label == "Contracts") {
                onMenuChange(menuActionContracts);
                if (menuTypeChange) {
                    menuTypeChange(item.label)
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
