export type MenuType = 'horseListe' | 'stabListe' | 'halfLeaseUserList' | 'Activities' | 'Annonces' | 'Contracts'

export interface Field {
    label: string;
    name: string;
    placeholder: string;
    type: string;
    step?: string;
}