import express, { Express } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
// import energyRoutes from './energy.routes'
import EnergyController from './controllers/energy.controller'

dotenv.config()

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/energy/hydro', EnergyController.getHydroGeneration)
app.get('/energy/nuclear', EnergyController.getNuclearGeneration)
app.get('/energy/solar', EnergyController.getSolarGeneration)
app.get('/energy/thermal', EnergyController.getThermalGeneration)
app.get('/energy/wind', EnergyController.getWindGeneration)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
