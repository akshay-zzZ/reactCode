import React,{ Component } from 'react';
import { Button } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';
// import { Button } from '@material-ui/core';
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

  renderProduct = ({ Tower }) => <div>{ Tower }</div>

  render() {
    const { products } = this.state;
    return (
    <div className="App">
      {products.map(this.renderProduct)}
      <Button variant="contained" color="primary">
        Hello World
      </Button>
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
