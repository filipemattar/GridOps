import { Collection } from 'mongodb'
import { cosu, nordeste, norte, sin, sul } from '../mongoDB'

interface GenerationRecord {
  instante: string
  geracao: number
}

interface RegionDocument {
  source: string
  data: GenerationRecord[]
}

const regionCollection: Record<string, Collection<RegionDocument>> = {
  sin,
  norte,
  nordeste,
  sul,
  cosu,
}

const EnergyRepositoryMongoDB = {
  async saveEnergyDataInDB(
    region: string,
    data: GenerationRecord[],
    source: string
  ) {
    const collection = regionCollection[region]

    const document: RegionDocument = {
      source,
      data,
    }

    if (!collection) throw new Error(`Invalid region: ${region}`)

    try {
      await collection.insertOne(document)
    } catch (error: any) {
      if (error.code !== 11000) {
        console.error('Error saving:', error)
      }
    }
  },

  async getEnergyData(region: string): Promise<any[]> {
    const collection = regionCollection[region]
    if (!collection) throw new Error(`Invalid region: ${region}`)

    return await collection.find({}).toArray()
  },
}

export default EnergyRepositoryMongoDB
