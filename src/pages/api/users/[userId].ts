import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";

import type { User } from "../../../types/User.type";

type Data = {
    message: object | string;
    data: null | User;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const userId = req.query.userId as string; // Obtenez l'identifiant de l'utilisateur à partir des paramètres de la requête

        // Read
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            select: {
                id: true,
                name: true,
                firstname: true,
                email: true,
                emailVerified: true,
                image: true,
                streetAddress: true,
                postalCode: true,
                addresseCity: true,
                addresseCountry: true,
                lon: true,
                lat: true,
            },
        });
        res.status(200).json({ message: "Note created", data: user as User });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error || "An error occurred", data: null });
    }
}
