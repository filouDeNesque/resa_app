import type { UserPlace } from "./UserPlace.type";
import type { User } from "./User.type";
import type { Stabs } from "./stabs"
import type { Contract } from "./Contract.type";
import type { Ads } from "./Ads.type";

export interface Horse {
    id: string;
    name: string;
    size: number;
    createdDate: Date;
    UdpdateDate: Date;
    birthDate: Date;
    userPlace: UserPlace;
    placeId: string;
    stab: Stabs;
    stabId: string;
    user: User;
    ownerId: string;
    halfLeaseUsers: User[];
    halfLeaseUsersId: string[];
    contract: Contract[];
    ads: Ads[];
}  