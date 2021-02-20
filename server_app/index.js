const { ApolloServer, gql } = require('apollo-server');


const data = [
    {
        "name":"Aqib Memon",
        "email":"aqib@aqib.com",
        "age":1,
        "id":1
    },
    {
        "name":"Umer Memon",
        "email":"umer@aqib.com",
        "age":2,
        "id":2
    },
    {
        "name":"Usman Khan",
        "email":"usman@aqib.com",
        "age":21,
        "id":3
    }
]

const resolvers = {
    Query: {
      students: () => data,
    },
  };


const typeDefs = gql`

  type Students {
    name: String
    email: String
    age: Int
    id:Int
  }

  type Query {
   students: [Students]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});