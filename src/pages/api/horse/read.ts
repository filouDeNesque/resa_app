import type { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { Horse } from "~/types/Horse.type";

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

        // Create a new horse
        const { horse } = req.body
        const newHorse = await prisma.horse.findMany({
            select: select
        })
        res.status(200).json({ message: 'API Horse read All', data: newHorse })
    } catch (error) {
        console.log(error)
        res.status(200).json({ message: error || 'API Horse read All', data: null })
    }
}
