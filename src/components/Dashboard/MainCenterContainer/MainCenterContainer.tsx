import Form from "./Form/Form";
import TableListe from "./TableListe/TableListe";

interface ChildComponentProps {
    style: string;
    content: "form" | "table";
}

const MainCenterContainer: React.FC<ChildComponentProps> = ({ style, content }) => {
    const onSubmit = () => {
        console.log("submite on Form push")
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