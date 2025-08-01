import { PrismaClient } from './generated/prisma/client.js'
import express from 'express'
import { auhenticateToken } from './middlewares/auth.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

const app = express()

app.disable('x-powered-by')
app.use(express.json())

const PORT = process.env.PORT ?? 1234

app.get('/', async (req, res) => {
    res.status(200).send('<h1>Mi super página web</h1>')
})

app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: 'Failed conection to data base'})
    }
})

app.post('/users', async (req, res) => {
    try {
        const newUser = await prisma.user.create({
            data: req.body
        })

        console.log(newUser)

        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ error: 'Failed conection to data base'})
    }
})

app.get('/protected-route', auhenticateToken, (req, res) => {
    res.send('This is a protected route')
})

app.post('/register', async (req, res) => {
    const { email, password, name } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            name,
            role: 'USER'
        } 
    })

    res.status(201).json({ message: 'User registered succesfully'})
})

app.post('/login', async (req, res) => {
    const {email, password} = req.body

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (!user) return res.status(400).json({error: 'Invalid email or password'})
    
    const validPassword = await bcrypt.compare(password, user.password)
    
    if(!validPassword) return res.status(400).json({error: 'Invalid email or password'})
    
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '4h' })

    res.json({ token })
})

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})