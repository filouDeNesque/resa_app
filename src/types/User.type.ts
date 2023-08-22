import type { UserPlace } from "./UserPlace.type";
import type { Account } from "./Account.type";
import type { Session } from "./Session.type";
export interface User {
    id?: string;
    name?: string |null;
    firstname?: string |null;
    email?: string |null;
    emailVerified?: Date |null;
    image?: string |null;
    streetAddress?: string|null;
    postalCode?: string|null;
    addresseCity?: string|null;
    addresseCountry?: string|null;
    lon?: number|null;
    lat?: number|null;
    accounts?: Account[];
  sessions?: Session[];

    UserPlace?: UserPlace[]|null;
}