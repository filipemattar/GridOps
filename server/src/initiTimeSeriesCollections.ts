import { MongoClient } from 'mongodb'

// To run this file, terminal inside server: yarn ts-node src/initiTimeSeriesCollections.ts

const uri = 'mongodb://localhost:27017/'
const client = new MongoClient(uri)

async function initializeCollections() {
  const database = client.db('brasilgenerationdb')

  await database.createCollection('sin', {
    timeseries: {
      timeField: 'instante',
      metaField: 'source',
      granularity: 'minutes',
    },
  })

  await database.createCollection('Norte', {
    timeseries: {
      timeField: 'instante',
      metaField: 'source',
      granularity: 'minutes',
    },
  })

  await database.createCollection('Nordeste', {
    timeseries: {
      timeField: 'instante',
      metaField: 'source',
      granularity: 'minutes',
    },
  })

  await database.createCollection('Sul', {
    timeseries: {
      timeField: 'instante',
      metaField: 'source',
      granularity: 'minutes',
    },
  })

  await database.createCollection('Centro-OesteeSudeste', {
    timeseries: {
      timeField: 'instante',
      metaField: 'source',
      granularity: 'minutes',
    },
  })

  console.log('All collections created!')
}

client
  .connect()
  .then(() => initializeCollections())
  .then(() => client.close())
  .catch(console.error)
