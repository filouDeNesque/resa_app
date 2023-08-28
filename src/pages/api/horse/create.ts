import type { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { Horse } from "~/types/Horse.type";

type Data = {
    message: object | string;
    data: null | Horse;
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
        const newHorse = await createHorse(horse)
        res.status(200).json({ message: 'New Horse add', data: newHorse })
    } catch (error) {
        console.log(error)
    }
}

async function createHorse(horse: Horse) {
    const prismaHorseData: Prisma.HorseUncheckedCreateInput = {
        name: horse.name,
        size: horse.size,
        birthDate: horse.birthDate,
        ownerId: horse.ownerId,
    };
    if (horse.placeId) {
        prismaHorseData.placeId = horse.placeId;
    }

    if (horse.stabId) {
        prismaHorseData.stabId = horse.stabId;
    }

    const newHorse = await prisma.horse.create({
        data: prismaHorseData
    })
    return newHorse;
}