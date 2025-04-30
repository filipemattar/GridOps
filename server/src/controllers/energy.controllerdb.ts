import EnergyRepositoryMongoDB from '../data/energy.repositorydb'
import { Request, Response } from 'express'
import EnergyAPI from '../utils/onsapi'

interface GenerationRecord {
  instante: string
  geracao: number
}
const EnergyControllerDB = {
  async fetchAndStore() {
    const regions = ['sin', 'Norte', 'Nordeste', 'Centro-OesteeSudeste', 'Sul']
    const sources = ['hidraulica', 'nuclear', 'solar', 'termica', 'eolica']

    regions.forEach(async (region) => {
      sources.forEach(async (source) => {
        const data: GenerationRecord[] = await EnergyAPI.getEnergyDataFromONS(
          region,
          source
        )
        await EnergyRepositoryMongoDB.saveEnergyDataInDB(region, source, data)
      })
    })
  },

  async getDataFromDB(req: Request, res: Response) {
    try {
      const region = req.params.region
      const source = req.params.source
      const data = await EnergyRepositoryMongoDB.getEnergyData(region, source)

      res.status(200).json(data)
    } catch (error: any) {
      res.status(500).json({ error: 'Error retriving from DB' })
    }
  },
}

export default EnergyControllerDB
