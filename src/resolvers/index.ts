import { Resolvers } from '../types/graphql'
import { custom_mutation } from './custom_mutation'

export const resolvers: Resolvers = {
  Query: {
    apollo_health_check: () => true,
  },
  Mutation: {
    custom_mutation,
  },
}
