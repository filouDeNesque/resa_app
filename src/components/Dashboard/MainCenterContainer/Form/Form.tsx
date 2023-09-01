import React, { type FormEvent } from "react";
import { useHorseData } from "~/hooks/useHorseData";
import { type Horse } from "~/types/Horse.type";
import { type Stabs } from "~/types/stabs";
import { FormField } from "./FormField";



interface FormProps {
    // ! onSubmit n'est pas utilisé 
    onSubmit: (horse?: Horse, stab?: Stabs) => void;
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
        onSubmit(horse);
    };


    interface inputLabel {
        name: string;
        type: string;
        id: string;
        htmlFor: string;
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

