import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const { id } = req.query as { id: string };
    try {
      const user = await prisma.userPlace.delete({
        where: { id },
      });
      res.status(200).json({ message: "User deleted successfully", user });
    } catch (error) {
      res.status(500).json({ error: "Could not delete user" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
