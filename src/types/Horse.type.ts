import type { UserPlace } from "./UserPlace.type";
import type { User } from "./User.type";
import type { Stabs } from "./stabs"
import type { Contract } from "./Contract.type";
import type { Ads } from "./Ads.type";

export interface Horse {
    id: string;
    name: string;
    size: number;
    createdDate: Date | null;
    UdpdateDate: Date | null;
    birthDate: Date;
    placeId: string|null;
    stabId: string|null;
    ownerId: string;
    halfLeaseUsersId: string[] | null;
    //TODO: revoir la methode des ads
    //  ads: Ads[] | null ;
}  