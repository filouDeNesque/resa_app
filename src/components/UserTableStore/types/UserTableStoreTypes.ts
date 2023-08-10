export interface UserPlace {
  id?: string;
  name: string;
  type: string;
  dateAdded: string;
  id_Api: number;
  lon: number;
  lat: number;
  userId: string;
}
// Definir les différents type
export interface UserTableprops {
  UserStore: UserPlace[];
  setUserStore: React.Dispatch<React.SetStateAction<UserPlace[]>>;
  setUpdateStore:React.Dispatch<React.SetStateAction<boolean>>;
  updateStore:boolean;
}
