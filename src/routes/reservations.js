import { Router } from "express"
import { authenticateToken } from "../middlewares/auth.js"
import { createReservation, getReservation, updateReservation, deleteReservation } from "../controllers/reservationController.js"

export const reservationRouter = Router()

reservationRouter.post('/reservations', authenticateToken, createReservation)
reservationRouter.get('/reservations/:id', authenticateToken, getReservation)
reservationRouter.put('/reservations/:id', authenticateToken, updateReservation)
reservationRouter.delete('/reservations/:id', authenticateToken, deleteReservation)