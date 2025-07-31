import { PrismaClient } from './generated/prisma/client.js'
import express from 'express'

const prisma = new PrismaClient()

const app = express()

const PORT = process.env.PORT ?? 1234

app.disable('x-powered-by')
app.use(express.json())

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

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})