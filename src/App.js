import logo from './logo.svg';
import './App.css';
import React from 'react'
import './Components/Persons'
import Persons from './Components/Persons';
class App extends React.Component{

  state = {
    persons : []
  }

  componentDidMount()
  {
    fetch('https://localhost:44332/api/person')
  .then(response => response.json())
  .then((data) => this.setState({ persons: data }));
  
  console.log('hello');
  }
    
render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
	  	       <div className="shopping-list">
<h1>Shopping List for {this.props.name}</h1>
         <ul>
           <li>Instagram</li>
           <li>WhatsApp</li>
           <li>Oculus</li>
         </ul>
       </div>

       <Persons persons={this.state.persons} />

    </div>
  );
}
}

export default App;


// class ShoppingList extends React.Component {
  // render() {
    // return (
      // <div className="shopping-list">
        // <h1>Shopping List for {this.props.name}</h1>
        // <ul>
          // <li>Instagram</li>
          // <li>WhatsApp</li>
          // <li>Oculus</li>
        // </ul>
      // </div>
    // );
  // }
// }