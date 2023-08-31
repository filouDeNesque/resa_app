

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