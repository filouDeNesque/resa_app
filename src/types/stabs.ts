export interface Stabs {
  id: string;
  name: string;
  StreetAddress: string;
  PostalCode: string;
  AddressLocality: string;
  AddressCountry: string;
  Telephone: string;
  Site: string;
  lon: number | null;
  lat?: number | null;
  place_id: string | null;
}
