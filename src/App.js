import './App.css';
import React from 'react'
import './Components/Persons'
import Persons from './Components/Persons';
import OriginalPage from './Components/OriginalPage';
import * as data from './data.json'


class App extends React.Component{

  state = {
    persons : []
  };

  loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'data.json', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null); 
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
  this.loadJSON(function(json) {
    console.log(json); // this will log out the json object
  });

  const {allData} = data;
  this.setState(allData);

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