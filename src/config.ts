import env from 'dotenv'
env.config()

export interface Config {
  port?: string | number
}

export default async function readConfig(): Promise<Config> {
  return {
    port: process.env.PORT || 4000
  }
}