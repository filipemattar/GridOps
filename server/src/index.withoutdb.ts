import express, { Express } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import EnergyController from './controllers/energy.controller'
import RegionEnergyController from './controllers/regionEnergy.controller'

dotenv.config()

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/energy/SIN/hydro', EnergyController.getHydroGeneration)
app.get('/energy/SIN/nuclear', EnergyController.getNuclearGeneration)
app.get('/energy/SIN/solar', EnergyController.getSolarGeneration)
app.get('/energy/SIN/thermal', EnergyController.getThermalGeneration)
app.get('/energy/SIN/wind', EnergyController.getWindGeneration)

//NorthRegion
app.get('/energy/Norte/hydro', RegionEnergyController.getNorthHydroGeneration)
app.get(
  '/energy/Norte/nuclear',
  RegionEnergyController.getNorthNuclearGeneration
)
app.get('/energy/Norte/solar', RegionEnergyController.getNorthSolarGeneration)
app.get(
  '/energy/Norte/thermal',
  RegionEnergyController.getNorthThermalGeneration
)
app.get('/energy/Norte/wind', RegionEnergyController.getNorthWindGeneration)

//southRegion
app.get('/energy/Sul/hydro', RegionEnergyController.getSouthHydroGeneration)
app.get('/energy/Sul/nuclear', RegionEnergyController.getSouthNuclearGeneration)
app.get('/energy/Sul/solar', RegionEnergyController.getSouthSolarGeneration)
app.get('/energy/Sul/thermal', RegionEnergyController.getSouthThermalGeneration)
app.get('/energy/Sul/wind', RegionEnergyController.getSouthWindGeneration)

//Northeast
app.get(
  '/energy/Nordeste/hydro',
  RegionEnergyController.getNortheastHydroGeneration
)
app.get(
  '/energy/Nordest/nuclear',
  RegionEnergyController.getNortheastNuclearGeneration
)
app.get(
  '/energy/Nordeste/solar',
  RegionEnergyController.getNortheastSolarGeneration
)
app.get(
  '/energy/Nordeste/thermal',
  RegionEnergyController.getNortheastThermalGeneration
)
app.get(
  '/energy/Nordeste/wind',
  RegionEnergyController.getNortheastWindGeneration
)

//COSU
app.get(
  '/energy/Centro-OesteeSudeste/hydro',
  RegionEnergyController.getCosuHydroGeneration
)
app.get(
  '/energy/Centro-OesteeSudeste/nuclear',
  RegionEnergyController.getCosuNuclearGeneration
)
app.get(
  '/energy/Centro-OesteeSudeste/solar',
  RegionEnergyController.getCosuSolarGeneration
)
app.get(
  '/energy/Centro-OesteeSudeste/thermal',
  RegionEnergyController.getCosuThermalGeneration
)
app.get(
  '/energy/Centro-OesteeSudeste/wind',
  RegionEnergyController.getCosuWindGeneration
)

// app.get('/energy/all', EnergyController.getAllGeneration) //rota para salvar todas as fontes juntas

const port = process.env.PORT

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
