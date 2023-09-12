import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import type { Stabs } from "../../../types/stabs";

type Data = {
  message: string | object;
  data: Stabs[] | null;
};

type RequestBody = {
  ids: string[];
  placeId: string[];
  lon: number[];
  lat: number[];
  city: string[];
};

const MESSAGES = {
  success: "stabs data",
  error: "An error occurred",
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    console.log("====================read api")
    const { placeId, lon, lat, city, ids } = req.body as RequestBody;
    const stabs = await prisma.stabs.findMany({
      where: {
        OR: [
          {
            id: {
              in: ids,
            },
          },
          {
            place_id: {
              in: placeId,
            },
          },
          {
            AddressLocality: {
              in: city,
            },
          },
          {
            lon: {
              in: lon,
            },
          },
          {
            lat: {
              in: lat,
            },
          },
        ],
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
    res.status(200).json({ message: MESSAGES.success, data: stabs });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error || MESSAGES.error, data: null });
  }
}
