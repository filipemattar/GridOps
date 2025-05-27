import express, { Express } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import EnergyControllerDB from './controllers/energy.controllerdb'

dotenv.config()

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/energy/:region/:source', EnergyControllerDB.getDataFromDB)
app.get('/download', EnergyControllerDB.getDatatoDownload)

setInterval(EnergyControllerDB.fetchAndStore, 3000000)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
