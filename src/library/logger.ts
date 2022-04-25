import { Logger } from 'tslog'

export const logger: Logger = new Logger({
  displayDateTime: false,
  displayFilePath: 'hidden',
  displayFunctionName: false,
})
