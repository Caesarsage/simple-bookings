import express, {Application, Request, Response} from 'express'

const middleware = (app: Application) => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
}

const setupRoute = (app: Application) => { 
  app.get('/', (request: Request , response: Response) => {
    response.send('Hello World!')
  })

  app.get('*', (request: Request, response: Response) => { 
    response.send('Page does not exist!')
  })
}

export const startServer = () => {
  const app: Application = express()
  middleware(app)

  setupRoute(app)
  return app
}