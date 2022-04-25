import { ApolloServer } from 'apollo-server'
import { appconfig } from './app-config'
import { resolvers } from './resolvers'

// https://www.graphql-tools.com/docs/migration-from-import/
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'

const schema = loadSchemaSync(`${__dirname}/schema.graphql`, {
  loaders: [new GraphQLFileLoader()],
})

const schemaWithResolvers = addResolversToSchema({
  schema,
  resolvers,
})

const server = new ApolloServer({ schema: schemaWithResolvers })

// NOTE: if you change the port you have to update the Hasura Remote value as well
server.listen({ port: appconfig.port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
