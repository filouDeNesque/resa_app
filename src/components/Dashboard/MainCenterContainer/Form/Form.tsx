import React, { useContext, useEffect, useState, type FormEvent } from "react";
import DashboardContext from "~/context/dashboard/dashboard.context";
import { activitiesFormfields, annonceFormfields, horseFormfields, stabFormfields } from "~/data/formFields";
import { type Horse } from "~/types/Horse.type";
import { type Field, type MenuType } from "../../Dashboard.type";
import { FormField } from "./FormField";
import FormFieldTextarea from "./FormFieldTextarea";

//TODO:Création d'un context pour le form

interface FormProps {
    onSubmit: () => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const { menuType, createHorse } = useContext(DashboardContext)
    const [fieldInputs, setFieldInputs] = useState<Field[]>(getFormFields(menuType));

    useEffect(() => {
        setFieldInputs(getFormFields(menuType))
    }, [menuType])

    //handler du Form 
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inputs = Array.from(e.currentTarget.elements) as HTMLFormElement[];
        const data = inputs
            .filter((input) => input.name)
            .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value as string }), {} as Record<string, string>);

        //renvoi n'importe quel forme 
        switch (menuType) {
            case "horseListe":
                SubmitHorsein(data, createHorse)
                onSubmit();
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
    };

    return (
        fieldInputs.length > 0 && (
            <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 md:gap-6">
                    {fieldInputs.map((item) => (
                        <>
                            {item.type != "textarea" && (
                                <FormField label={item.label} name={item.name} placeholder={item.placeholder} type={item.type} step={item.step} />
                            )}
                            {item.type == "textarea" && (
                                <FormFieldTextarea item={item} />
                            )}
                        </>
                    ))}
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        )

    );
};

export default Form;

function getFormFields(menuType: MenuType): Field[] {
    switch (menuType) {
        case "horseListe":
            return horseFormfields;
        case "stabListe":
            return stabFormfields;
        case "Annonces":
            return annonceFormfields;
        case "Activities":
            return activitiesFormfields;
        default:
            return [];
    }
}
//fetch create de Horse
function SubmitHorsein(data: Record<string, string>, createHorse: (horse: Horse) => Promise<void>) {
    const horse: Horse = {
        id: 'unknow',
        name: `${data.firstName as string} ${data.lastName as string}`,
        size: parseFloat(data.size as string),
        birthDate: new Date(data.birthdate as string),
        //!modifier l'id par celui de l'utilisateur
        ownerId: "cllqs7p350000ukpc3b3l92mc",
        createdDate: null,
        UdpdateDate: null,
        placeId: null,
        stabId: null,
        halfLeaseUsersId: null
    }
    createHorse(horse).catch((error) => {
        console.log(error)
    })
}
//fetch create de Stab