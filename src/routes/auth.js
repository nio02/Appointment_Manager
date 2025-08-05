import { Router } from "express";
import { auhenticateToken } from "../middlewares/auth.js";
import { register, login } from "../controllers/authController.js";

export const authRoutes = Router()

authRoutes.post('/auth/register', register)
authRoutes.post('/auth/login', login)

authRoutes.get('/protected-route', auhenticateToken, (req, res) => {
    res.send('This is a protected route')
})
