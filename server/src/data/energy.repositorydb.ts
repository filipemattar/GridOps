import { Collection } from 'mongodb'
import { cosu, nordeste, norte, sin, sul } from '../mongoDB'

interface GenerationRecord {
  instante: string
  geracao: number
}

interface RegionDocument {
  source: string
  data: GenerationRecord[]
  lastUpdate: Date
}

const regionCollection: Record<string, Collection<RegionDocument>> = {
  sin,
  norte,
  nordeste,
  sul,
  cosu,
}

//TODO: need to rethink about this function
const EnergyRepositoryMongoDB = {
  async saveEnergyDataInDB(
    region: string,
    newData: GenerationRecord[],
    source: string
  ) {
    const collection = regionCollection[region]

    if (!collection) throw new Error(`Invalid region: ${region}`)

    await collection.createIndex({ 'data.instate': 1 }) //cria index unico
    await collection.createIndex({ source: 1 }) //cria index unico

    const existingDoc = await collection.findOne(
      { source },
      { sort: { lastUpdate: -1 } }
    )

    const existingInstantes = new Set(
      existingDoc?.data.map((d) => d.instante) || []
    )
    const filteredData = newData.filter(
      (record) => !existingInstantes.has(record.instante)
    )

    if (filteredData.length === 0) {
      console.log('No new data to add')
      return
    }

    if (existingDoc) {
      await collection.updateOne(
        { _id: existingDoc._id },
        {
          $push: { data: { $each: filteredData } },
          $set: { lastUpdate: new Date() },
        }
      )
    } else {
      await collection.insertOne({
        source,
        data: filteredData,
        lastUpdate: new Date(),
      })
    }
  },

  async getEnergyData(region: string): Promise<any[]> {
    const collection = regionCollection[region]
    if (!collection) throw new Error(`Invalid region: ${region}`)

    return await collection.find({}).toArray()
  },
}

export default EnergyRepositoryMongoDB
