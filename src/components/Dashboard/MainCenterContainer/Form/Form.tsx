import React, { useState, type FormEvent, useEffect } from "react";
import { useHorseData } from "~/hooks/useHorseData";
import { type Horse } from "~/types/Horse.type";
import { type Stabs } from "~/types/stabs";
import { FormField } from "./FormField";
import { type MenuType } from "../../Dashboard.type";

interface Field {
    label: string;
    name: string;
    placeholder: string;
    type: string;
    step?: string;
}

interface FormProps {
    // ! onSubmit n'est pas utilisé 
    onSubmit: (horse?: Horse, stab?: Stabs) => void;
    menuType: MenuType
}

const Form: React.FC<FormProps> = ({ onSubmit, menuType }) => {
    const {
        UseHorseCreateData,
    } = useHorseData();

    const [fieldInputs, setFieldInputs] = useState<Field[]>([]);

    //mise en forme des input en fonction du context
    useEffect(() => {
        if (menuType === "horseListe") {
            setFieldInputs(horseFormfields);
        }
        else if (menuType === "stabListe") {
            setFieldInputs(stabFormfields);
        }
        else if (menuType === "Annonces") {
            setFieldInputs(annonceFormfields);
        }
        else if (menuType === "Activities") {
            setFieldInputs(activitiesFormfields);
        } else if (menuType === "Contracts" || menuType === "halfLeaseUserList") {
            setFieldInputs([])
        }
    }, [menuType])

    //transmission des data
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const inputs = Array.from(e.currentTarget.elements) as HTMLFormElement[];
        const data = inputs
            .filter((input) => input.name)
            .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value as string }), {} as Record<string, string>);

        //renvoi n'importe quel forme 
        const horse: Horse = {
            id: 'unknow',
            name: `${data.floating_first_name as string} ${data.floating_last_name as string}`,
            size: parseFloat(data.floating_size as string),
            birthDate: new Date(data.floating_birthDate as string),
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
        onSubmit(horse);
    };

    return (

        fieldInputs.length > 0 && (
            <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 md:gap-6">
                    {fieldInputs.map((item, index) => (
                        <>
                            {
                                item.type != "textarea" && (
                                    <FormField label={item.label} name={item.name} placeholder={item.placeholder} type={item.type} step={item.step} />
                                )
                            }
                            {
                                item.type == "textarea" && (
                                    <div className="relative z-0 w-full mb-6 group">

                                        <textarea aria-label={item.label} name={item.name} id={item.name} placeholder={item.placeholder} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></textarea>
                                        <label htmlFor={item.name} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{item.label}</label>
                                    </div>
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
    { label: "Name", name: "floating_first_name", placeholder: "", type: "text" },
    { label: "Last Name", name: "floating_last_name", placeholder: "", type: "text" },
    { label: "Size", name: "floating_size", placeholder: "", type: "number", step: "0.01" },
    { label: "Birth Date", name: "floating_birthDate", placeholder: "", type: "date" },
    //TODO: change to type liste
    { label: "stab", name: "floating_stab", placeholder: "", type: "text" },
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