import React, { type FormEvent } from "react";
import { useHorseData } from "~/hooks/useHorseData";
import { type Horse } from "~/types/Horse.type";
import { Stabs } from "~/types/stabs";

interface FormProps {
    onSubmit: (horse: Horse) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const {
        UseHorseCreateData,
    } = useHorseData();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const inputs = Array.from(e.currentTarget.elements) as HTMLFormElement[];
        const data = inputs
            .filter((input) => input.name)
            .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value as string }), {} as Record<string, string>);

        console.log(data)
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
        console.log(horse)
        UseHorseCreateData(horse).catch((error) => {
            console.log(error)
        })
        // Effectuer les actions nécessaires avant la soumission (validation, envoi, etc.)
        onSubmit(horse);
    };


    interface inputLabel {
        name: string;
        type: string;
        id: string;
        htmlFor: string;
    }
    interface itemForm {
        type: string;
        inputlabel: inputLabel;
        horse?: Horse;
        stab?: Stabs;
        halfLeaseUsers?: Horse;
        createHorse: () => void;
        updateHorse: () => void;
        createStab: () => void;
        updateStab: () => void;
    }


    return (

        <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6">
                <FormField label="Name" name="floating_first_name" placeholder="" type="text" />
                <FormField label="Last Name" name="floating_last_name" placeholder="" type="text" />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <FormField label="Size" name="floating_size" placeholder="" type="number" step="0.01" />
                <FormField label="Birth Date" name="floating_birthDate" placeholder="" type="date" />
            </div>
            <FormField label="Stab" name="floating_stab" placeholder="" type="text" />
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    );
};

export default Form;


const FormField: React.FC<{ label: string, name: string, type: string, placeholder: string, required?: boolean, step?: string }> = ({ label, name, type, placeholder, required, step }) => (
    <div className="relative z-0 w-full mb-6 group">
        <input type={type} name={name} id={name} step={step} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder={` ${placeholder}`} required={required} />
        <label htmlFor={name} className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
    </div>
);