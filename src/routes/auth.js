import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.js";
import { register, login } from "../controllers/authController.js";

export const authRoutes = Router()

authRoutes.post('/auth/register', register)
authRoutes.post('/auth/login', login)

authRoutes.get('/protected-route', authenticateToken, (req, res) => {
    res.send('This is a protected route')
})
