import { type Horse } from "~/types/Horse.type";
import Form from "./Form/Form";
import TableListe from "./TableListe/TableListe";

interface ChildComponentProps {
    style: string;
    content: "form" | "table";
}

const MainCenterContainer: React.FC<ChildComponentProps> = ({ style, content }) => {
    const onSubmit = (horse:Horse) => {
        
        console.log("submite on Form push ======================: ", horse)
    }
    return (
        <>
            <div id="main-center-container" className={style}>
                <div id="Box-liste-container">
                    <div id="title-container">
                        <div id="logo-name"></div>
                        <div id="filter container"></div>
                    </div>
                    {content === "form" ? <Form onSubmit={onSubmit} /> : <TableListe />}
                </div>
            </div>
        </>
    );
};

export default MainCenterContainer;