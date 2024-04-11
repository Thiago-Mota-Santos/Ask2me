import 'dotenv/config'
import { connectDatabase } from './database'
import { createServer } from 'http'
import { app } from './app'
;import { config } from './config';
(async () => {
  await connectDatabase()
  const PORT = config.PORT as unknown as number || 8080
  const server = createServer(app.callback())
  console.log(PORT)
  server.listen(PORT, '0.0.0.0', () => {
    console.log('Server is running');
  });
})()
