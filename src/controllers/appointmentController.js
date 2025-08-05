import { getUserAppointmentsService } from "../services/appointmentService.js"

export const getUserAppointments = async (req, res) => {
    try {
        const userId = req.params.id
        const appointments = await getUserAppointmentsService(userId)
        
        res.json(appointments)
    } catch (e) {
        res.status(500).json({ error: 'Error fetching user appointments' })
    }
}