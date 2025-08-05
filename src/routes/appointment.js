import { Router } from "express"
import { authenticateToken } from "../middlewares/auth.js"
import { getUserAppointments } from "../controllers/appointmentController.js"

export const appointmentRoutes = Router()

appointmentRoutes.get('/:id/appointments', authenticateToken , getUserAppointments)