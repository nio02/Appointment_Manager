import { registerUser, loginUser } from "../services/authService.js"

export const register = async (req, res) => {
    try {
        const { email, password, name } = req.body
        await registerUser(email, password, name)
        return res.status(201).json({ message: 'User registered successfully'})
    } catch (e) {
        res.status(400).json({ error: e.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const token = await loginUser(email, password)
        return res.json({ token })
    } catch (e) {
        res.status(400).json({ error: e.message })
    }
}