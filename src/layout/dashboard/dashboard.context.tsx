import React, { createContext, useState, type ReactNode } from "react";
import { type MenuType } from "~/components/Dashboard/Dashboard.type";

type Content = "form" | "table"

const initialState = {
    //dashboard
    content: "table",
    menuType: "horseListe",
    horseData: [],
    stabsData: [],
    // leftside
    activeMenu: [],
    menuTypeChange: (type: MenuType) => { console.log("Changemenu state menu", type) },
    contentChange: (contentItem: Content) => { console.log("Changemenu state content", contentItem) },
    //ListeMenu
    itemClick: () => { console.log("Changemenu state content or and menu") },
    //Form
    submitForm: () => { console.log("submit form horse || stab || activities || anonces") },
    //TableListe
    deleteRawByid: () => { console.log("Changemenu state content") },
}
const DashboardContext = createContext(initialState);
export default DashboardContext;

//? Provider----------------
type DashboardContextProviderProps = {
    children?: ReactNode
}

export const DashboardContextProvider: React.FC<DashboardContextProviderProps> = ({ children }) => {
    const [content, setContent] = useState<Content>("table");
    const [menuType, setMenuType] = useState<MenuType>("horseListe");

    const contentChange = (contentItem: Content) => {
        setContent(contentItem);
    }
    const menuTypeChange = (type: MenuType) => {
        setMenuType(type);
    }

    const value = {
        content: content,
        menuType: menuType,
        horseData: [],
        stabsData: [],
        activeMenu: [],
        menuTypeChange: menuTypeChange,
        contentChange: contentChange,
        itemClick: initialState.itemClick,
        submitForm: initialState.submitForm,
        deleteRawByid: initialState.deleteRawByid,
    }

    return <DashboardContext.Provider value={value}>{children} </DashboardContext.Provider>
}

