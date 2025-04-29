import EnergyRepositoryMongoDB from '../data/energy.repositorydb'
import { Request, Response } from 'express'
import EnergyAPI from '../utils/onsapi'

interface GenerationRecord {
  instante: string
  geracao: number
}
const EnergyControllerDB = {
  async fetchAndStore(req: Request, res: Response) {
    try {
      const region = req.params.region
      const source = req.params.source

      const data: GenerationRecord[] = await EnergyAPI.getEnergyDataFromONS(
        region,
        source
      )

      await EnergyRepositoryMongoDB.saveEnergyDataInDB(region, data, source)

      res.status(201).json({ message: 'Data saved successfully' })
    } catch (error: any) {
      res.status(500).json({ error: 'Error fetching and saving data' })
    }
  },

  async getDataFromDB(req: Request, res: Response) {
    try {
      const region = req.params.region
      const data = await EnergyRepositoryMongoDB.getEnergyData(region)

      res.status(200).json(data)
    } catch (error: any) {
      res.status(500).json({ error: 'Error retriving from DB' })
    }
  },
}

export default EnergyControllerDB
