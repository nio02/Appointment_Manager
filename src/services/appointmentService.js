import { PrismaClient } from '../../generated/prisma/client.js'

const prisma = new PrismaClient()

export const getUserAppointmentsService = async (id) => {
    try {
        const user = await prisma.user.findFirst({ where: { id: parseInt(id, 10) } })

        if(!user){
            return 'User not found'
        }

        const appointments = await prisma.appointment.findMany({
            where: {
                userId: parseInt(id, 10)
            },
            include: {
                timeBlock: true
            }
        })
        
        if(appointments.length === 0){
            return 'User has no appointments'
        }

        return appointments
    } catch (e) {
        throw new Error('Error fetching user appointments')
    }
}