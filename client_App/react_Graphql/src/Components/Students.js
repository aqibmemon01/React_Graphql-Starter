import React from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_STUDENTS = gql`
  query GetStudents {
    students {
      name,
      email,
      age,
      id
    }
  }
`;


function App() {

    const { loading, error, data } = useQuery(GET_STUDENTS);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

        const {students} = data
console.log(data)

      return(
          <div>
<h2> Data From Server </h2>
              {
students.map((val) => (
    <div key={val.id} >
      <p>
        {val.name + ", " + val.email + ", " + val.age + ", " + val.id + " "}
      </p>
    </div>
))
              }
          </div>
      )
    //   yarn add -D @graphql-codegen/typescript-operations
      
      
}

export default App;
