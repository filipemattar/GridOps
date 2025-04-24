import express, { Express } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import energyRoutes from './energy.routes'

dotenv.config()

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/energy', energyRoutes)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
