import { Router } from "express"
import { authRoutes } from "./auth.js"
import { adminRoutes } from "./admin.js"
import { reservationRouter } from "./reservations.js"

export const router = Router()

router.use('/auth', authRoutes)
router.use('/admin', adminRoutes)
router.use('/reservations', reservationRouter)