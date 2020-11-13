import './App.css';
import React from 'react'
import './Components/Persons'
import Persons from './Components/Persons';
import OriginalPage from './Components/OriginalPage';
import {stuff} from './data.js' 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch, Redirect
    } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import PageNotFound from './Components/PageNotFound'
import PersonDetails from './Components/PersonDetails';

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
      {/* <OriginalPage /> */}
      
      <Router basename={process.env.PUBLIC_URL}>
      <div>
            <Link to="/home">Home </Link>
            <Link to="/about">About </Link>
            <Link to="/persons">Persons </Link>
        </div>
      <div>There are {this.state.persons.length} people in the list.</div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/persons"><Persons persons={this.state.persons} /></Route>
        <Route path="/persons/:id" component={PersonDetails} />
        
        <Route component={PageNotFound}/>
        </Switch>
      </Router>
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