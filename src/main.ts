import readConfig, { Config } from './config'
import { startServer } from './server'

const launchServer = async (Config: Config) => {
  const app = await startServer()

  app.listen(Config.port, () => { 
    console.log(`Server is running on port ${Config.port}`)
  })
}

readConfig().then(launchServer)