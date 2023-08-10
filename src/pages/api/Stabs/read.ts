import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";

import type { Stabs } from "../../../handler/types/stabs";

type Data = {
  message: object | string;
  data: null | Stabs[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const ids = req.body as string[]; // Utilisation de l'opérateur 'as' pour l'assertion de type
    const stabs = await prisma.stabs.findMany({
      where: {
        place_id: {
          in: ids,
        },
      },
      select: {
        id: true,
        name: true,
        StreetAddress: true,
        PostalCode: true,
        AddressLocality: true,
        AddressCountry: true,
        Telephone: true,
        Site: true,
        lon: true,
        lat: true,
        place_id: true,
      },
    });
    res.status(200).json({ message: "stabs data", data: stabs });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error || "An error occurred", data: null });
  }
}
//recherche sur le nom
//la ville
// le departement
//todo : return stabs find
