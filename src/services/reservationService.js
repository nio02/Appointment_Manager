import { PrismaClient } from '../../generated/prisma/client.js'

const prisma = new PrismaClient()

export const createReservationService = async (data) => {
    const conflict = await prisma.appointment.findFirst({
        where: {
            date: data.date,
            timeBlockId: data.timeBlockId
        }
    })

    if(conflict){
        throw new Error('Time slot is occupied')
    }
    
    const newReservation = await prisma.appointment.create({ data })

    return newReservation
}

export const getReservationService = async (id) => {
    const reservation = await prisma.appointment.findUnique({
        where: {
            id: parseInt(id, 10)
        }
    })

    return reservation
}

export const updateReservationService = async (id, data) => {
    const conflict = await prisma.appointment.findFirst({
        where: {
            date: data.date,
            timeBlockId: data.timeBlockId,
            id: {not: parseInt(id, 10)}
        }
    })

    if (conflict) {
        throw new Error('Time slot is occupied')
    }

    const updatedReservation = await prisma.appointment.update({
        where: {
            id: parseInt(id, 10)
        },
        data
    })

    return updatedReservation
}

export const deleteReservationService = async (id) => {
    const deletedReservation = await prisma.appointment.delete({
        where: {
            id: parseInt(id, 10)
        }
    })

    return deletedReservation
}