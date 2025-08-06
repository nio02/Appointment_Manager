import express from 'express'
import { router } from './routes/main.js'

export const app = express()

app.disable('x-powered-by')
app.use(express.json())

app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Hello world')
})