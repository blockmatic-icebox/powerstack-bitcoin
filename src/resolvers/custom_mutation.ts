import {
  Custom_Mutation_Output,
  MutationCustom_MutationArgs,
} from '../types/graphql'
import { logger, prisma } from '../library'

export const custom_mutation = async (
  _,
  { data: { account } }: MutationCustom_MutationArgs,
) => {
  try {
    const output: Custom_Mutation_Output = { success: true }

    /// custom code goes here
    logger.info(account)

    return output
  } catch (error) {
    logger.error(error)
    throw new Error(error.message)
  }
}
