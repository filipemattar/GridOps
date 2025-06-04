import { MongoClient } from 'mongodb'

const uri = 'mongodb://localhost:27017/'

const client = new MongoClient(uri)

interface TimeSeriesEnergyRecord {
  instante: Date
  geracao: number
  source: string
}

const database = client.db('brasilgenerationdb')

const sin = database.collection<TimeSeriesEnergyRecord>('sin')
const norte = database.collection<TimeSeriesEnergyRecord>('Norte')
const nordeste = database.collection<TimeSeriesEnergyRecord>('Nordeste')
const sul = database.collection<TimeSeriesEnergyRecord>('Sul')
const cosu = database.collection<TimeSeriesEnergyRecord>('Centro-OesteeSudeste')

export { sin, norte, nordeste, sul, cosu, TimeSeriesEnergyRecord }
export default client
