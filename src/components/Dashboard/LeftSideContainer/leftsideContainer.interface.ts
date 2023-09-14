import { type StaticImageData } from "next/image";

export interface Menu {
    title: string,
    icone: StaticImageData,
    total?: number,
    level: 1 | 2 | 3,
    label: MenuLabel
}

export type MenuLabel =
    | "formHorse"
    | "table"
    | "formStab"
    | "formAnnonce"
    | "formActivities"
    | "Horse"
    | "Stable"
    | "halfLeaf"
    | "Activities"
    | "Annonces"
    | "Contracts";