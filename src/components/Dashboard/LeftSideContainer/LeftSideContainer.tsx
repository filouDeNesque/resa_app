import { useState } from "react"
import chevalICo from "../../../../public/images/icone/Cheval-icone-2.png"
import DemiPICo from "../../../../public/images/icone/demi-pension.png"
import StabICo from "../../../../public/images/icone/stab.png"
import AddICo from "../../../../public/images/icone/Add-icone.png";
import listeICo from "../../../../public/images/icone/icons8-liste-64.png";
import { ListeMenu } from "./ListeMenu"
import type { Menu } from "./leftsideContainer.interface"
import Style from "./style.module.css"

type menuType = 'horseListe' | 'stabListe' | 'halfLeaseUserList'

interface LeftSideContainerProps {
    style: string;
    onContentChange:  (newContent: "form" | "table") => void;
    changeMenu: (menuName: menuType) => void;
}

const LeftSideContainer: React.FC<LeftSideContainerProps> = ({ style, onContentChange, changeMenu }) => {
    const [activeMenu, setActiveMenu] = useState<Menu[]>(menuactionHorse);

    const handleMenuChange = (newMenu: Menu[]) => {
        setActiveMenu(newMenu);
    };

    const handleMenuItemClick = (content: "form" | "table") => {
        onContentChange(content);
    };
    return (

        <div id="left-side-container" className={style}>
            <div id="contextual-menu">
                <h3>Cheval</h3>
                <div id="separator" className={Style.separator}> </div>
                <ListeMenu menu={activeMenu} onMenuItemClick={handleMenuItemClick} ></ListeMenu>
            </div>
            <div id="separator" className={Style.separator}> </div>
            <div id="List-component" className={Style.ListComponent}>
                <ListeMenu menu={menuComponent} onMenuChange={handleMenuChange} changeMenu={changeMenu}></ListeMenu>
            </div>
        </div>

    );
};

export default LeftSideContainer;

const menuComponent: Menu[] = [
    { title: "Chevaux", icone: chevalICo, total:12 },
    { title: "Pension", icone: StabICo, total:1 },
    { title: "Demi-pension", icone: DemiPICo, total:0 },
]

const menuactionHorse: Menu[] = [
    { title: "Liste", icone: listeICo },
    { title: "Add", icone: AddICo },
]

// TODO: Allow comportement to match component

