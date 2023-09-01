import Style from "./style.module.css"

type thHeaderProps = {
    content: string;
}

export const ThHeader: React.FC<thHeaderProps> = ({ content }) => {
    return (
        <>
            <th scope="col" className={Style.theadTh} >{content}</th>
        </>
    );
};
