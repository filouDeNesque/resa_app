import { useHorseData } from "~/hooks/useHorseData";
import { UseStabData } from "~/hooks/useStabData";
import { type MenuType } from "../Dashboard.type";
import Form from "./Form/Form";
import TableListe from "./TableListe/TableListe";

interface ChildComponentProps {
    style: string;
    content: "form" | "table";
    menuType: MenuType;
    changeMenu: (newContent: "form" | "table") => void;
    handleSetMenuType: (menuName: MenuType) => void;
}

const MainCenterContainer: React.FC<ChildComponentProps> = ({ style, content, menuType, changeMenu, handleSetMenuType }) => {
    const onSubmit = () => {
        // ! onSubmit n'est pas Utilisé
        console.log("submite on Form push ======================: ");
        switch (menuType) {
            case "horseListe":
                handleSetMenuType("stabListe")
                handleSetMenuType("horseListe")
                changeMenu("table")

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
                    {/* TODO : 
                    - ajout du menuType dans les props 
                    - revoir le model de base de données gestion de activity et des annonces (dessiner le parcour utilisateur pour les deux cas)
                    - faire varier les champs input en fonction de l'item à mettre
                        -input pour Annonces
                        -input pour Activities
                    - mettre en place l'api
                        -input pour Annonces Create
                        -input pour Activities Create
                    - mise en place de la gestion d'une annonce :
                        - interet
                        - acceptation
                        - refus
                    - mise en place de la gestion d'une Activities :
                        - interet
                        - acceptation
                        - refus
                    */}

                    {/* externaliser 
                        - onSubmitHorse
                        - onSubmitStab
                        - onSubmitAnnonces
                        - onSubitActivities
                    */}
                    {content === "form" ? <Form onSubmit={onSubmit} menuType={menuType} /> : <></>}
                    {content === "table" ?
                        <TableListe
                            menuType={menuType}
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