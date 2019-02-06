import React, { Component } from 'react';
import Search from './Search';
import "./App.css";
// Angular - Framework
// React - Libriary


// React Component

class App extends Component {

  constructor() {
    super();
    this.state = {
      name : 'sarath'
    }
    this.onClick= this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      name: 'Vinod'
    })
  }
  
  render() {
    return (<div> 
     <Search name={this.state.name}/>
     <button onClick={this.onClick}>Fire Props</button>
    </div>)
  }  
}

export default App;