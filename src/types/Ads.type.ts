import type { User } from "./User.type";
import type { Horse } from "./Horse.type";
import type { Stabs } from "./stabs";
import type { Activity } from "./Activity.type";

export interface Ads {
    id: string;
    type: string;
    price: number;
    createdDate: Date;
    UdpdateDate: Date;
    startingDate: Date;
    endingDate: Date;
    title: string;
    content: string;
    userSignatory: User;
    contractSignatory: string;
    userIssuer: User;
    contractIssuer: string;
    horseIssuer: Horse;
    horseId: string;
    activity: Activity;
    activityId: string[];
    stab?: Stabs;
    stabId?: string;
}