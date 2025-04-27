import express, { Express } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
// import energyRoutes from './energy.routes'
import EnergyController from './controllers/energy.controller'
import RegionEnergyController from './controllers/regionEnergy.controller'

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

//NorthRegion
app.get('/energy/north/hydro', RegionEnergyController.getNorthHydroGeneration)
app.get(
  '/energy/north/nuclear',
  RegionEnergyController.getNorthNuclearGeneration
)
app.get('/energy/north/solar', RegionEnergyController.getNorthSolarGeneration)
app.get(
  '/energy/north/thermal',
  RegionEnergyController.getNorthThermalGeneration
)
app.get('/energy/north/wind', RegionEnergyController.getNorthWindGeneration)

//southRegion
app.get('/energy/south/hydro', RegionEnergyController.getSouthHydroGeneration)
app.get(
  '/energy/south/nuclear',
  RegionEnergyController.getSouthNuclearGeneration
)
app.get('/energy/south/solar', RegionEnergyController.getSouthSolarGeneration)
app.get(
  '/energy/south/thermal',
  RegionEnergyController.getSouthThermalGeneration
)
app.get('/energysouth//wind', RegionEnergyController.getSouthWindGeneration)

//Northeast
app.get(
  '/energy/northeast/hydro',
  RegionEnergyController.getNortheastHydroGeneration
)
app.get(
  '/energy/northeast/nuclear',
  RegionEnergyController.getNortheastNuclearGeneration
)
app.get(
  '/energy/northeast/solar',
  RegionEnergyController.getNortheastSolarGeneration
)
app.get(
  '/energy/northeast/thermal',
  RegionEnergyController.getNortheastThermalGeneration
)
app.get(
  '/energy/northeast/wind',
  RegionEnergyController.getNortheastWindGeneration
)

//COSU
app.get('/energy/cosu/hydro', RegionEnergyController.getCosuHydroGeneration)
app.get('/energy/cosu/nuclear', RegionEnergyController.getCosuNuclearGeneration)
app.get('/energy/cosu/solar', RegionEnergyController.getCosuSolarGeneration)
app.get('/energy/cosu/thermal', RegionEnergyController.getCosuThermalGeneration)
app.get('/energy/cosu/wind', RegionEnergyController.getCosuWindGeneration)

// app.get('/energy/all', EnergyController.getAllGeneration) //rota para salvar todas as fontes juntas

const port = process.env.PORT

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
