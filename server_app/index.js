const { ApolloServer, gql } = require('apollo-server');


const data = [
    {
        "name":"Aqib Memon",
        "email":"aqib@gamil.com",
        "age":22,
        "id":01
    },
    {
        "name":"Umer Memon",
        "email":"umer@gamil.com",
        "age":18,
        "id":02
    },
    {
        "name":"Usman Khan",
        "email":"usman@gamil.com",
        "age":15,
        "id":03
    },
    {
      "name":"Ali Majeed",
      "email":"ali@gamil.com",
      "age":25,
      "id":04
  },
  {
    "name":"Aamir Ahmed",
    "email":"aamir@gamil.com",
    "age":28,
    "id":05
},
{
  "name":"Iqra Memon",
  "email":"iqra@gmail.com",
  "age":18,
  "id":06
},
{
  "name":"Uzma Memon",
  "email":"uzma@gmail.com",
  "age":21,
  "id":07
}
]

const resolvers = {
    Query: {
      students: () => data,
    },
  };


const typeDefs = gql`

  type students {
    name: String
    email: String
    age: Int
    id:Int
  }

  type Query {
   students: [students]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});