import { useContext } from "react";
import { useHorseData } from "~/hooks/useHorseData";
import { UseStabData } from "~/hooks/useStabData";
import DashboardContext from "~/layout/dashboard/dashboard.context";
import { type MenuType } from "../Dashboard.type";
import Form from "./Form/Form";
import TableListe from "./TableListe/TableListe";

interface ChildComponentProps {
    style: string;
}

const MainCenterContainer: React.FC<ChildComponentProps> = ({ style }) => {
    const { content, contentChange, menuType, menuTypeChange } = useContext(DashboardContext);

    const onSubmit = () => {
        // ! onSubmit n'est pas Utilisé
        console.log("submite on Form push ======================: ");
        switch (menuType) {
            case "horseListe":
                menuTypeChange("stabListe")
                menuTypeChange("horseListe")
                contentChange("table")

                return true;
            case "stabListe":
                return true;
            case "Annonces":
                return true;
            case "Activities":
                return true;
            default:
                return [];
        }
    }

    const {
        horseData,
        UseHorseDeleteByIdData,
        UseHorseByhalfLeaseUserIdData,
        UseHorseByUserIdData,
    } = useHorseData();

    const {
        stabdata,
        UsegetStabByaArrayIdData
    } = UseStabData()

    return (
        <>
            <div id="main-center-container" className={style}>
                <div id="Box-liste-container">
                    <div id="title-container">
                        <div id="logo-name"></div>
                        <div id="filter container"></div>
                    </div>
                    {content === "form" ? <Form onSubmit={onSubmit} menuType={menuType as MenuType} /> : <></>}
                    {content === "table" ?
                        <TableListe
                            menuType={menuType as MenuType}
                            horseData={horseData}
                            UseHorseDeleteByIdData={UseHorseDeleteByIdData}
                            UseHorseByhalfLeaseUserIdData={UseHorseByhalfLeaseUserIdData}
                            UseHorseByUserIdData={UseHorseByUserIdData}
                            UsegetStabByaArrayIdData={UsegetStabByaArrayIdData}
                            stabdata={stabdata}
                        /> :
                        <></>}

                </div>
            </div>
        </>
    );
};

export default MainCenterContainer;