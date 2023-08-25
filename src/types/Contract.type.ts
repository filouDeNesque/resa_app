import type { User } from "./User.type";
import type { Horse } from "./Horse.type";
import type { Stabs } from "./stabs";

export interface Contract {
    id: string;
    price: number;
    type: string;
    createdDate: Date;
    UdpdateDate: Date;
    startingDate: Date;
    endingDate: Date;
    title: string;
    content: string;
    acceptationDate: Date;
    userSignatory: User;
    contractSignatory: string;
    userIssuer: User;
    contractIssuer: string;
    horseIssuer: Horse;
    horseId: string;
    stab?: Stabs;
    stabId?: string;
  }