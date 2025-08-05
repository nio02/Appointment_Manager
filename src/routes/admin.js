import { Router } from "express"
import { createTimeblocks, listReservations } from "../controllers/adminController.js"
import { authenticateToken } from '../middlewares/auth.js'

export const adminRoutes = Router()

adminRoutes.post('/timeblocks', authenticateToken , createTimeblocks)
adminRoutes.get('/reservations', authenticateToken , listReservations)