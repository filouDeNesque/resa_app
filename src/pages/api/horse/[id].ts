import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";
import type { Horse } from "~/types/Horse.type";

//TODO:possibilité de faire un modele global pour tous les requête horse
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
        console.log("Api by Id")
        switch (req.method) {
            case 'GET':
                // Get a horse
                const resHorse = await prisma.horse.findUnique({
                    where: {
                        id: req.query.id as string
                    },
                    select: select,
                });
                res.status(200).json({ message: 'Get Horse ById', data: resHorse })
                break;
            case 'PUT':
                // Update a horse
                const updatedHorseData = req.body as Horse
                const updateData = {
                    ...(updatedHorseData.name !== null && { name: updatedHorseData.name }),
                    ...(updatedHorseData.size !== null && { size: updatedHorseData.size }),
                    ...(updatedHorseData.createdDate !== null && { createdDate: updatedHorseData.createdDate }),
                    ...(updatedHorseData.UdpdateDate !== null && { UdpdateDate: updatedHorseData.UdpdateDate }),
                    ...(updatedHorseData.birthDate !== null && { birthDate: updatedHorseData.birthDate }),
                    ...(updatedHorseData.placeId !== null && { placeId: updatedHorseData.placeId }),
                    ...(updatedHorseData.stabId !== null && { stabId: updatedHorseData.stabId }),
                    ...(updatedHorseData.ownerId !== null && { ownerId: updatedHorseData.ownerId }),
                    ...(updatedHorseData.halfLeaseUsersId !== null && { halfLeaseUsersId: updatedHorseData.halfLeaseUsersId }),
                };
                const updatedHorse = await prisma.horse.update({
                    where: {
                        id: req.query.id as string
                    },
                    data: updateData,
                    select: select,
                });
                res.status(200).json({ message: 'Update Horse ById', data: updatedHorse })
                break;
            case 'DELETE':
                // Delete a horse
                console.log("Delete Horse -----------------")
                console.log(req.query.id)
                const { id } = req.query as {id:string}
                const deleteHorse = await prisma.horse.delete({
                    where: {
                        id: id,
                    },
                });
                res.status(200).json({ message: 'Delete Horse ById', data: deleteHorse })
                break;

            default:
                break;
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error || "An error occurred API Horseby id", data: null })
    }
}
