import mongoose from 'mongoose'
import 'dotenv/config'
import { config } from './config'

const URI = config.MONGO_URI

async function connectDatabase() {
  mongoose.connection
    .once('open', () => console.log('Database connected'))
    .on('error', (err) => console.log(err))
    .on('close', () => console.log('Database closed'))

  await mongoose.connect(URI)
}

export { connectDatabase }
