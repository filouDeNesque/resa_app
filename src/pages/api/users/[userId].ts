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

        if (req.method === "GET") {
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
        } else if (req.method === "PUT") {

            console.log("updatedUserData")
            const updatedUserData: User = req.body as User;

            const updatedUser = await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    name: updatedUserData.name,
                    firstname: updatedUserData.firstname,
                    email: updatedUserData.email,
                    emailVerified: updatedUserData.emailVerified,
                    image: updatedUserData.image,
                    streetAddress: updatedUserData.streetAddress,
                    postalCode: updatedUserData.postalCode,
                    addresseCity: updatedUserData.addresseCity,
                    addresseCountry: updatedUserData.addresseCountry,
                    lon: updatedUserData.lon,
                    lat: updatedUserData.lat,
                },
                select: {
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

            res.status(200).json({ message: "User data updated", data: updatedUser });


        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error || "An error occurred", data: null });
    }



}
