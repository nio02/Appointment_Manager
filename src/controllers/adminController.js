import { createTimeblockService, listReservationsService } from "../services/adminService.js"

export const createTimeblocks = async (req, res) => {
    if (req.user.role !== 'ADMIN'){
        return res.status(403).json({ error: 'Access denied'})
    }

    const { startTime, endTime } = req.body

    try {
        const newTimeBlock = await createTimeblockService(startTime, endTime)
        res.status(201).json(newTimeBlock)
    } catch (e) {
        res.status(500).json({ error: 'Error creating time block' })
    }
}

export const listReservations = async (req, res) => {
    if (req.user.role !== 'ADMIN'){
        return res.status(403).json({ error: 'Access denied'})
    }

    try {
        const reservations = await listReservationsService()
        res.json(reservations)
    } catch (e) {
        res.status(500).json({ error: 'Error fetching reservations' })
    }
}