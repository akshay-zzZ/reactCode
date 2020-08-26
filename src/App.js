import React,{ Component } from 'react';
import { Button } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Demo from './Demo';
import Card from './Cardz';
class App extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    this.getData();
  }

  getData = _ => {
    fetch('http://localhost:4000/')
    .then(response => response.json())
    .then(response => this.setState({ products: response.data}))
    .catch(err => console.error(err))
  }

  renderProduct = ({ Tower_Lead }) => <Card tl = { Tower_Lead } />


  // newCard = ({ Tower_Lead }) => {
  //   return (
  //     <Card style={{ width: '18rem' }}>
  //       <Card.Img variant="top" src="holder.js/100px180" />
  //       <Card.Body>
  //         <Card.Title>{ Tower_Lead }</Card.Title>
  //         <Card.Text>
  //           Some quick example text to build on the card title and make up the bulk of
  //           the card's content.
  //         </Card.Text>
  //         <Button variant="primary">Go somewhere</Button>
  //       </Card.Body>
  //     </Card>
  //   );
  // }


  render() {
    const { products } = this.state;
    return (
    <div className="App">
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Learning Dashboard
          </Typography>
        </Box>
      </Container>

      <Demo />

      {products.map(this.renderProduct)}
    </div>
  );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >-
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
