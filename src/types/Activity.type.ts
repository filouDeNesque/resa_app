import type { Ads } from "./Ads.type";

export interface Activity {
    id: string;
    name: string;
    ads: Ads[];
}