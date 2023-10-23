import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"

const typeDefs = `
type Query{
    message: String!
}
`

const resolvers = {
    Query: {
        message: ()=>{
            return 'hello world!'
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})
const { url } = await startStandaloneServer(server, { listen: { port: 3001 } })

console.log(`Server is running at ${url}`)
