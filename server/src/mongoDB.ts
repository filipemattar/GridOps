import { MongoClient } from 'mongodb'

const uri = 'mongodb://localhost:27017/'

const client = new MongoClient(uri)

interface SourceDocument {
  source: string
  data: GenerationRecord[]
  lastUpdate: Date
}

interface GenerationRecord {
  instante: string
  geracao: number
}
const database = client.db('brasilgenerationdb')

const sin = database.collection<SourceDocument>('sin')
const norte = database.collection<SourceDocument>('Norte')
const nordeste = database.collection<SourceDocument>('Nordeste')
const sul = database.collection<SourceDocument>('Sul')
const cosu = database.collection<SourceDocument>('Centro-OesteeSudeste')

export { sin, norte, nordeste, sul, cosu }
export default client
