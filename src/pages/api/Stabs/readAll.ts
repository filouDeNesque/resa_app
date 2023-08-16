import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import type { Stabs } from "../../../types/stabs";

type Data = {
  message: object | string;
  data: null | Stabs[];
};

interface RequestBody {
  lon: number;
  lat: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { lon, lat } = req.body as RequestBody;
  console.log(lon, lat);
  try {
    const targetlat = lat - 0.2;
    const targetlatmax = lat + 0.4;
    const targetlon = lon - 0.2;
    const targetlonmax = targetlon + 0.4;

    const stabs = await prisma.stabs.findMany({
      take: 50,
      where: {
        lon: { gte: targetlat, lte: targetlatmax },
        lat: { gte: targetlon, lte: targetlonmax },
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
