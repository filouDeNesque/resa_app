import { type Field } from "~/components/Dashboard/Dashboard.type"

export const horseFormfields: Field[] = [
    { label: "Name", name: "firstName", placeholder: "", type: "text" },
    { label: "Last Name", name: "lastName", placeholder: "", type: "text" },
    { label: "Size", name: "size", placeholder: "", type: "number", step: "0.01" },
    { label: "Birth Date", name: "birthdate", placeholder: "", type: "date" },
    //TODO: change to type liste
    { label: "stab", name: "stab", placeholder: "", type: "text" },
]
export const stabFormfields: Field[] = [
    { label: "Name", name: "name", placeholder: "", type: "text" },
    { label: "Adresse", name: "adresse", placeholder: "", type: "text" },
    { label: "Code postal", name: "postalCode", placeholder: "", type: "number" },
    { label: "Ville", name: "city", placeholder: "", type: "text" },
    { label: "Telephone", name: "phone", placeholder: "", type: "tel" },
    { label: "Site", name: "site", placeholder: "", type: "tel" },
    { label: "Capacité", name: "capacity", placeholder: "", type: "date" },
]
export const annonceFormfields: Field[] = [
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
export const activitiesFormfields: Field[] = [
    { label: "Type", name: "type", placeholder: "Veterinaire", type: "text" },
    { label: "Catégories", name: "categories", placeholder: "", type: "text" },
    { label: "Titre", name: "title", placeholder: "", type: "text" },
    { label: "Commentaire", name: "content", placeholder: "", type: "textarea" },
    { label: "Cheval", name: "horse", placeholder: "", type: "liste" },
    { label: "Début", name: "startingDate", placeholder: "", type: "date" },
    { label: "Fin", name: "endingDate", placeholder: "", type: "date" },
    { label: "Prix", name: "price", placeholder: "", type: "number" },
]