import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";

import type { UserPlace } from "../../../components/UserTableStore/types/UserTableStoreTypes";

type Data = {
  message: object | string;
  data: null | UserPlace[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // Read
    const userPlace = await prisma.userPlace.findMany({
      select: {
        id:true,
        name: true,
        type: true,
        dateAdded: true,
        id_Api: true,
        lon: true,
        lat: true,
        userId: true,
      },
    });
    res.status(200).json({ message: "Note created", data: userPlace });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error || "An error occurred", data: null });
  }
}
