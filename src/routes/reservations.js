import { Router } from "express"
import { authenticateToken } from "../middlewares/auth.js"
import { createReservation, getReservation, updateReservation, deleteReservation } from "../controllers/reservationController.js"

export const reservationRouter = Router()

reservationRouter.post('/', authenticateToken, createReservation)
reservationRouter.get('/:id', authenticateToken, getReservation)
reservationRouter.put('/:id', authenticateToken, updateReservation)
reservationRouter.delete('/:id', authenticateToken, deleteReservation)