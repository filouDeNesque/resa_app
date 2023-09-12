import { useHorseData } from "~/hooks/useHorseData";
import { UseStabData } from "~/hooks/useStabData";
import { type Horse } from "~/types/Horse.type";
import { type Stabs } from "~/types/stabs";
import Form from "./Form/Form";
import TableListe from "./TableListe/TableListe";

interface ChildComponentProps {
    style: string;
    content: "form" | " table";
    menuType: menuType
}

type menuType = 'horseListe' | 'stabListe' | 'halfLeaseUserList'


const MainCenterContainer: React.FC<ChildComponentProps> = ({ style, content, menuType }) => {
    const onSubmit = (horse?: Horse, stab?: Stabs) => {
        // ! onSubmit n'est pas Utilisé
        console.log("submite on Form push ======================: ", horse ? horse : stab)
    }
    console.log("utilisation de main center component ")

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
                    {content === "form" ? <Form onSubmit={onSubmit} /> :
                        <TableListe
                            menuType={menuType}
                            horseData={horseData}
                            UseHorseDeleteByIdData={UseHorseDeleteByIdData}
                            UseHorseByhalfLeaseUserIdData={UseHorseByhalfLeaseUserIdData}
                            UseHorseByUserIdData={UseHorseByUserIdData}
                            UsegetStabByaArrayIdData={UsegetStabByaArrayIdData}
                            stabdata={stabdata}
                        />}

                </div>
            </div>
        </>
    );
};

export default MainCenterContainer;