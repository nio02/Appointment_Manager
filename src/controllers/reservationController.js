import { createReservationService, getReservationService, updateReservationService, deleteReservationService } from "../services/reservationService.js"

export const createReservation = async (req, res) => {
    try {
        const reservation = await createReservationService(req.body)

        res.status(201).json(reservation)
    } catch (e) {
        res.status(400).json({ error: e.message })
    }
}

export const getReservation = async (req, res) => {
    try {
        const reservation = await getReservationService(req.params.id)

        if(!reservation){
            return res.status(404).json({ error: 'Reservation not found'})
        }

        res.json(reservation)
    } catch (e) {
        res.status(400).json({ error: e.message })
    }
}

export const updateReservation = async (req, res) => {
    try {
        const reservation = await updateReservationService(req.params.id, req.body)

        if(!reservation){
            return res.status(404).json({ error: 'Reservation not found'})
        }

        res.json(reservation)
    } catch (e) {
        res.status(400).json({ error: e.message })
    }
}

export const deleteReservation = async (req, res) => {
    try {
        const result = await deleteReservationService(req.params.id)

        if(!result){
            return res.status(404).json({ error: 'Reservation not found'})
        }

        res.status(204).send()
    } catch (e) {
        res.status(400).json({ error: e.message })
    }
}