import { PrismaClient } from '../../generated/prisma/client.js'

const prisma = new PrismaClient()

export const createTimeblockService = async (startTime, endTime) => {
    const newTimeBlock = await prisma.timeBlock.create({
        data: {
            startTime: new Date(startTime),
            endTime: new Date(endTime)
        }
    })

    return newTimeBlock
}

export const listReservationsService = async () => {
    const reservations = await prisma.appointment.findMany({
        include: {
            user: true,
            timeBlock: true
        }
    })

    return reservations
}