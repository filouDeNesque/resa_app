import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";

import type { UserPlace } from "../../../components/UserTableStore/types/UserTableStoreTypes";

type Data = {
  message: object | string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, type, id_Api, lon, lat, userId } = req.body as UserPlace;
  const dateAdded = new Date(Date.now()).toISOString();

  try {
    // CREATE
    await prisma.userPlace.create({
      data: {
        name,
        type,
        dateAdded,
        id_Api,
        lon,
        lat,
        userId
      },

    });
    res.status(200).json({ message: "Note created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error || "An error occurred" });
  }
}
