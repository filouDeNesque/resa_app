/* eslint-disable @typescript-eslint/require-await */
import React, { createContext, useState, type ReactNode } from "react";
import { type MenuType } from "~/components/Dashboard/Dashboard.type";
import { useHorseData } from "~/hooks/useHorseData";
import { UseStabData } from "~/hooks/useStabData";
import type { Horse } from "~/types/Horse.type";
import { type Stabs } from "~/types/stabs";

type Content = "form" | "table"
type InitialState = {
    content: Content;
    menuType: MenuType;
    horseData: Horse | Horse[] | null;
    stabsData: Stabs | Stabs[] | null;
    activeMenu: MenuType | null;
    menuTypeChange: (type: MenuType) => void;
    contentChange: (contentItem: Content) => void;
    itemClick: () => void;
    submitForm: () => void;
    deleteRawByid: () => void;
    createHorse: (horse: Horse) => Promise<void>;
    deleteHorseById: (id: string) => Promise<void>;
    horseByHalfLeaseByUserId: (id: string) => Promise<void>;
    horseByUserId: (id: string) => Promise<void>;
    stabByHorseStabId: (id: string[]) => Promise<void>;
}

const initialState: InitialState = {
    content: "table",
    menuType: "horseListe",
    horseData: null,
    stabsData: null,
    activeMenu: null,
    menuTypeChange: (type: MenuType) => { console.log("Changemenu state menu", type) },
    contentChange: (contentItem: Content) => { console.log("Changemenu state content", contentItem) },
    itemClick: () => { console.log("Changemenu state content or and menu") },
    submitForm: () => { console.log("submit form horse || stab || activities || anonces") },
    deleteRawByid: () => { console.log("Changemenu state content") },
    createHorse: async (horse: Horse) => { console.log("create Horse", horse) },
    deleteHorseById: async (id: string) => { console.log("deleteHorse by id", id) },
    horseByHalfLeaseByUserId: async (id: string) => { console.log("horse by halflease by userId", id) },
    horseByUserId: async (id: string) => { console.log("horse by user id", id) },
    stabByHorseStabId: async (id: string[]) => { console.log("deleteStab by id", id) },
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
    const {
        horseData,
        UseHorseDeleteByIdData,
        UseHorseByhalfLeaseUserIdData,
        UseHorseByUserIdData,
        UseHorseCreateData
    } = useHorseData();
    const {
        stabdata,
        UsegetStabByaArrayIdData
    } = UseStabData()

    const contentChange = (contentItem: Content) => {
        setContent(contentItem);
    }
    const menuTypeChange = (type: MenuType) => {
        setMenuType(type);
    }
    const createHorse = async (horse: Horse) => {
        await UseHorseCreateData(horse);
    }
    const deleteHorseById = async (id: string) => {
        await UseHorseDeleteByIdData(id);
    }
    const horseByHalfLeaseByUserId = async (id: string) => {
        await UseHorseByhalfLeaseUserIdData(id);
    }
    const horseByUserId = async (id: string) => {
        await UseHorseByUserIdData(id);
    }
    const stabByHorseStabId = async (id: string[]) => {
        await UsegetStabByaArrayIdData(id);
    }

    const value = {
        content: content,
        menuType: menuType,
        horseData: horseData,
        stabsData: stabdata,
        activeMenu: initialState.activeMenu,
        menuTypeChange: menuTypeChange,
        contentChange: contentChange,
        itemClick: initialState.itemClick,
        submitForm: initialState.submitForm,
        deleteRawByid: initialState.deleteRawByid,
        createHorse: createHorse,
        deleteHorseById: deleteHorseById,
        horseByHalfLeaseByUserId: horseByHalfLeaseByUserId,
        horseByUserId: horseByUserId,
        stabByHorseStabId: stabByHorseStabId,
    }

    return <DashboardContext.Provider value={value}>{children} </DashboardContext.Provider>
}

