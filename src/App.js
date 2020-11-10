import './App.css';
import React from 'react'
import './Components/Persons'
import Persons from './Components/Persons';
import OriginalPage from './Components/OriginalPage';
import {stuff} from './data.js' 

class App extends React.Component{

  state = {
    persons : []
  };


  downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  componentDidMount()
  {
  //   fetch('https://localhost:44332/api/person')
  // .then(response => response.json())
  // .then((data) => {this.setState({ persons: data }); this.downloadObjectAsJson(data, "data.json") } );
  
  //use fake data
  var x = JSON.parse(stuff);
  var persons = x.persons;
  this.setState({persons});
  }
    
render() {
  return (
    <div className="App">
      <OriginalPage />
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