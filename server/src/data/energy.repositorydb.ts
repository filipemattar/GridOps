import { Collection } from 'mongodb'
import { cosu, nordeste, norte, sin, sul } from '../mongoDB'

interface SourceDocument {
  source: string
  data: GenerationRecord[]
  lastUpdate: Date
}

interface GenerationRecord {
  instante: string
  geracao: number
}

type MyObjType = { [key: string]: Collection<SourceDocument> }

const regionCollection: MyObjType = {
  sin: sin,
  Norte: norte,
  Nordeste: nordeste,
  Sul: sul,
  'Centro-OesteeSudeste': cosu,
}

const EnergyRepositoryMongoDB = {
  async saveEnergyDataInDB(
    region: string,
    source: string,
    newData: GenerationRecord[]
  ) {
    const collection = regionCollection[region]

    if (!collection) throw new Error(`Invalid region: ${region}`)

    await collection.createIndex({ 'data.instante': 1 })
    await collection.createIndex({ source: 1 })

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

  async getEnergyData(
    region: string,
    source: string
  ): Promise<SourceDocument | null> {
    const collection = regionCollection[region]
    if (!collection) throw new Error(`Invalid region: ${region}`)

    const latestData = await collection.findOne({ source })
    return latestData
  },

  async getDownloadData(region = 'sin') {
    const collection = regionCollection[region]

    return await collection.find({}).toArray()
  },
}

export default EnergyRepositoryMongoDB
