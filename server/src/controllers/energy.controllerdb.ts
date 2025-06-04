import EnergyRepositoryMongoDB from '../data/energy.repositorydb'
import { Request, Response } from 'express'
import EnergyAPI from '../utils/onsapi'
import { TimeSeriesEnergyRecord } from '../mongoDB'
import moment from 'moment-timezone'

interface APIGenerationRecord {
  instante: string
  geracao: number
}

const EnergyControllerDB = {
  async fetchAndStore() {
    const regions = ['sin', 'Norte', 'Nordeste', 'Centro-OesteeSudeste', 'Sul']
    const sources = ['hidraulica', 'nuclear', 'solar', 'termica', 'eolica']

    regions.forEach(async (region) => {
      sources.forEach(async (source) => {
        const data: APIGenerationRecord[] =
          await EnergyAPI.getEnergyDataFromONS(region, source)
        await EnergyRepositoryMongoDB.saveEnergyDataInDB(region, source, data)
      })
    })
  },

  async getDataFromDB(req: Request, res: Response) {
    try {
      const region = req.params.region
      const source = req.params.source
      const data: TimeSeriesEnergyRecord[] =
        await EnergyRepositoryMongoDB.getEnergyData(region, source)

      const formattedData = data.map((record) => ({
        ...record,
        instante: moment(record.instante).tz('America/Sao_Paulo').format(),
      }))

      res.status(200).json(formattedData)
    } catch (error: any) {
      res.status(500).json({ error: 'Error retriving from DB' })
    }
  },

  async getDatatoDownload(_: Request, res: Response) {
    try {
      const data = await EnergyRepositoryMongoDB.getDownloadData()
      res.attachment('brazil_energy_output.json')
      res.json(data)
    } catch (error: any) {
      res.status(500).json({ error: 'Error retriving from DB' })
    }
  },
}

export default EnergyControllerDB
