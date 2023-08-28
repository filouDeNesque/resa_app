import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { Horse } from "~/types/Horse.type";

//TODO:possibilité de faire un modele global pour tous les requête horse
type Data = {
    message: object | string;
    data: null | Horse[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const select = {
        id: true,
        name: true,
        size: true,
        createdDate: true,
        UdpdateDate: true,
        birthDate: true,
        placeId: true,
        stabId: true,
        ownerId: true,
        halfLeaseUsersId: true,
    }
    try {
        // Get a list of horse by user id
        const resHorse = await prisma.horse.findMany({
            where: {
                stabId: req.query.stabId as string
            },
            select: select,

        });
        res.status(200).json({ message: 'Get Horse ByStabId', data: resHorse })

    } catch (error) {
        res.status(400).json({ message: error || 'Get Horse ByStabId', data: null })

    }
}