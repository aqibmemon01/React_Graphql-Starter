import logo from './logo.svg';
import './App.css';
import client from './Config/graphqlConfig';
import { ApolloProvider } from '@apollo/client';
import Students from './Components/Students';


function App() {
  return (
    <ApolloProvider client={client} >
    <div className="App">
      <h2>My first Apollo app 🚀</h2>
      <Students />
    </div>
    </ApolloProvider>
  );
}

export default App;
