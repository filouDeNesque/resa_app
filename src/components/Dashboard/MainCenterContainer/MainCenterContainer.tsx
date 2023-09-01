import { type Horse } from "~/types/Horse.type";
import { type Stabs } from "~/types/stabs";
import Form from "./Form/Form";
import TableListe from "./TableListe/TableListe";
import { useState } from "react";
import { useHorseData } from "~/hooks/useHorseData";

interface ChildComponentProps {
    style: string;
    content: "form" | "table";
    menuType:menuType
}

type menuType = 'horseListe' | 'stabListe' | 'halfLeaseUserList'


const MainCenterContainer: React.FC<ChildComponentProps> = ({ style, content, menuType }) => {
    const onSubmit = (horse?: Horse, stab?: Stabs) => {
        // ! onSubmit n'est pas Utilisé
        console.log("submite on Form push ======================: ", horse ? horse : stab)
    }
    const {
        horseData,
        UseHorseDeleteByIdData
    } = useHorseData();
    return (
        <>
            <div id="main-center-container" className={style}>
                <div id="Box-liste-container">
                    <div id="title-container">
                        <div id="logo-name"></div>
                        <div id="filter container"></div>
                    </div>
                    {content === "form" ? <Form onSubmit={onSubmit} /> : <TableListe menuType={menuType} horseData={horseData} UseHorseDeleteByIdData={UseHorseDeleteByIdData} />}
                </div>
            </div>
        </>
    );
};

export default MainCenterContainer;