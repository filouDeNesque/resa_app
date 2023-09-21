import React, { useEffect, useState, type FormEvent, useContext } from "react";
import { useHorseData } from "~/hooks/useHorseData";
import { type Horse } from "~/types/Horse.type";
import { type MenuType } from "../../Dashboard.type";
import { FormField } from "./FormField";
import FormFieldTextarea from "./FormFieldTextarea";
import DashboardContext from "~/layout/dashboard/dashboard.context";

//TODO:Création d'un context pour le form
interface Field {
    label: string;
    name: string;
    placeholder: string;
    type: string;
    step?: string;
}

interface FormProps {
    onSubmit: (newContent: "form" | "table") => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const { menuType } = useContext(DashboardContext)
    const {
        UseHorseCreateData,
    } = useHorseData();
    const [fieldInputs, setFieldInputs] = useState<Field[]>(getFormFields(menuType as MenuType));

    useEffect(() => {
        setFieldInputs(getFormFields(menuType as MenuType))
    }, [menuType])

    //transmission des data
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const inputs = Array.from(e.currentTarget.elements) as HTMLFormElement[];
        const data = inputs
            .filter((input) => input.name)
            .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value as string }), {} as Record<string, string>);

        //renvoi n'importe quel forme 
        switch (menuType) {
            case "horseListe":
                SubmitHorsein(data, UseHorseCreateData)
                onSubmit("table");
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
                            {
                                item.type != "textarea" && (
                                    <FormField label={item.label} name={item.name} placeholder={item.placeholder} type={item.type} step={item.step} />
                                )
                            }
                            {
                                item.type == "textarea" && (
                                    <FormFieldTextarea item={item} />
                                )
                            }
                        </>
                    ))}
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        )

    );
};

export default Form;

const horseFormfields: Field[] = [
    { label: "Name", name: "firstName", placeholder: "", type: "text" },
    { label: "Last Name", name: "lastName", placeholder: "", type: "text" },
    { label: "Size", name: "size", placeholder: "", type: "number", step: "0.01" },
    { label: "Birth Date", name: "birthdate", placeholder: "", type: "date" },
    //TODO: change to type liste
    { label: "stab", name: "stab", placeholder: "", type: "text" },
]
const stabFormfields: Field[] = [
    { label: "Name", name: "name", placeholder: "", type: "text" },
    { label: "Adresse", name: "adresse", placeholder: "", type: "text" },
    { label: "Code postal", name: "postalCode", placeholder: "", type: "number" },
    { label: "Ville", name: "city", placeholder: "", type: "text" },
    { label: "Telephone", name: "phone", placeholder: "", type: "tel" },
    { label: "Site", name: "site", placeholder: "", type: "tel" },
    { label: "Capacité", name: "capacity", placeholder: "", type: "date" },
]
const annonceFormfields: Field[] = [
    //TODO: change to type liste
    { label: "Type", name: "type", placeholder: "Vente", type: "text" },
    { label: "Catégories", name: "categories", placeholder: "", type: "text" },
    { label: "Titre", name: "title", placeholder: "", type: "text" },
    { label: "Votre annonce", name: "content", placeholder: "", type: "textarea" },
    //TODO:Change to type liste
    { label: "Cheval", name: "horse", placeholder: "", type: "liste" },
    { label: "Début", name: "startingDate", placeholder: "", type: "date" },
    { label: "Fin", name: "endingDate", placeholder: "", type: "date" },
    { label: "Prix", name: "price", placeholder: "", type: "number" },
    { label: "label", name: "label", placeholder: "proposal", type: "liste" },
]
const activitiesFormfields: Field[] = [
    { label: "Type", name: "type", placeholder: "Veterinaire", type: "text" },
    { label: "Catégories", name: "categories", placeholder: "", type: "text" },
    { label: "Titre", name: "title", placeholder: "", type: "text" },
    { label: "Commentaire", name: "content", placeholder: "", type: "textarea" },
    { label: "Cheval", name: "horse", placeholder: "", type: "liste" },
    { label: "Début", name: "startingDate", placeholder: "", type: "date" },
    { label: "Fin", name: "endingDate", placeholder: "", type: "date" },
    { label: "Prix", name: "price", placeholder: "", type: "number" },
]

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
function SubmitHorsein(data: Record<string, string>, UseHorseCreateData: (horse: Horse) => Promise<void>) {
    const horse: Horse = {
        id: 'unknow',
        name: `${data.firstName as string} ${data.lastName as string}`,
        size: parseFloat(data.size as string),
        birthDate: new Date(data.birthdate as string),
        ownerId: "cllqs7p350000ukpc3b3l92mc",
        createdDate: null,
        UdpdateDate: null,
        placeId: null,
        stabId: null,
        halfLeaseUsersId: null
    }
    UseHorseCreateData(horse).catch((error) => {
        console.log(error)
    })
}
//fetch create de Stab