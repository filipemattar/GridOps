import { MongoClient } from 'mongodb'

const uri = 'mongodb://localhost:27017/'

const client = new MongoClient(uri)

interface GenerationRecord {
  instante: string
  geracao: number
}

interface RegionDocument {
  source: string
  data: GenerationRecord[]
}

const database = client.db('brasilgenerationdb')

const sin = database.collection<RegionDocument>('sin')
const norte = database.collection<RegionDocument>('norte')
const nordeste = database.collection<RegionDocument>('nordeste')
const sul = database.collection<RegionDocument>('sul')
const cosu = database.collection<RegionDocument>('cosu')

export { sin, norte, nordeste, sul, cosu }
export default client
