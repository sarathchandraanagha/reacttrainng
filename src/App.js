import React, { Component } from 'react';
import Search from './Search';
import "./App.css";
// Angular - Framework
// React - Libriary


// React Component

class Child extends Component {
  constructor(props) {
    super();
    this.state ={
      element: props.element
    };
  }
  render() {
    return (<div>
      { this.state.element }
      { this.props.children }
       </div>)
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      name : 'sarath',
      arr: ['one', 'two', 'three']
    }
    this.onClick= this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      name: 'Vinod',
      arr: ['one-1', 'two-2', 'three-3']
    })
  }
  
  render() {
    return (<div> 
     <Search name={this.state.name}/>
     <button onClick={this.onClick}>Fire Props</button>
      {
        this.state.arr.map((element)=>{
          return (<Child element={element} key={element}>
            <div> I am from App - { element} </div>
          </Child>)
        })
      }
    </div>)
  }  
}

export default App;