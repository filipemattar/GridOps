import { Collection } from 'mongodb'
import {
  cosu,
  nordeste,
  norte,
  sin,
  sul,
  TimeSeriesEnergyRecord,
} from '../mongoDB'

interface APIGenerationRecord {
  instante: string
  geracao: number
}

type MyObjType = { [key: string]: Collection<TimeSeriesEnergyRecord> }

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
    newData: APIGenerationRecord[]
  ) {
    const collection: Collection<TimeSeriesEnergyRecord> =
      regionCollection[region]

    if (!collection) throw new Error(`Invalid region: ${region}`)

    const recordsToProcess: TimeSeriesEnergyRecord[] = newData.map(
      (record) => ({
        instante: new Date(record.instante),
        geracao: record.geracao,
        source: source,
      })
    )

    const latestRecord = await collection.findOne(
      { source: source },
      { sort: { instante: -1 } }
    )

    const lastSavedInstante: Date | null = latestRecord?.instante || null

    const filteredData = recordsToProcess.filter(
      (record) => !lastSavedInstante || record.instante > lastSavedInstante
    )

    if (filteredData.length === 0) {
      console.log(`[${source} - ${region}] No new data to add.`)
      return
    }

    try {
      await collection.insertMany(filteredData)
    } catch (error: any) {
      console.error(
        `[${source} - ${region}] Error inserting time series data:`,
        error.message
      )
    }
  },

  async getEnergyData(
    region: string,
    source: string,
    limit: number = 1440
  ): Promise<TimeSeriesEnergyRecord[]> {
    const collection: Collection<TimeSeriesEnergyRecord> =
      regionCollection[region]

    if (!collection) throw new Error(`Invalid region: ${region}`)

    const docs = await collection
      .find({ source: source })
      .sort({ instante: -1 })
      .limit(limit)
      .toArray()

    return docs
  },

  async getDownloadData(region = 'sin'): Promise<TimeSeriesEnergyRecord[]> {
    const collection: Collection<TimeSeriesEnergyRecord> =
      regionCollection[region]

    return await collection.find({}).toArray()
  },
}

export default EnergyRepositoryMongoDB
