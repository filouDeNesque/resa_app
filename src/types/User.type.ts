import { UserPlace } from "./UserPlace.type";
export interface User {
    id?: string;
    name?: string;
    firstname?: string;
    email?: string;
    emailVerified?: Date;
    image?: string;
    streetAddress?: string;
    postalCode?: string;
    addresseCity?: string;
    addresseCountry?: string;
    lon?: number;
    lat?: number;
    UserPlace?: UserPlace[];
}