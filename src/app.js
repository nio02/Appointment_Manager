import express from 'express'
import { authRoutes } from './routes/auth.js'
import { adminRoutes } from './routes/admin.js'

export const app = express()

app.disable('x-powered-by')
app.use(express.json())

app.use('/api', authRoutes)
app.use('/api', adminRoutes)

app.get('/', (req, res) => {
    res.send('Hello world')
})

// app.get('/', async (req, res) => {
//     res.status(200).send('<h1>Mi super página web</h1>')
// })

// app.get('/users', async (req, res) => {
//     try {
//         const users = await prisma.user.findMany()
//         res.json(users)
//     } catch (error) {
//         res.status(500).json({ error: 'Failed conection to data base'})
//     }
// })

// app.post('/users', async (req, res) => {
//     try {
//         const newUser = await prisma.user.create({
//             data: req.body
//         })

//         console.log(newUser)

//         res.status(201).json(newUser)
//     } catch (error) {
//         res.status(500).json({ error: 'Failed conection to data base'})
//     }
// })