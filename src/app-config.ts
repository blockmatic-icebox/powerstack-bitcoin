import * as env from 'env-var'

export interface AppConfig {
  port: string
  env: string
}

export const appconfig: AppConfig = {
  port: env.get('PORT').required().asString(),
  env: env.get('NODE_ENV').asString(),
}
