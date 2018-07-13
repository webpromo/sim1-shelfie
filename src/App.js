import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      inventory:[]
    }
    this.getMethod = this.getMethod.bind(this);
  }

  componentDidMount(){    
    let promise = axios.get('/api/inventory')
    promise.then(res => {  
      this.setState({  
        inventory: res.data
    // inventory: res.data.results 
      })
    })
  }

  getMethod(){
    let promise = axios.get('/api/quotes')
    promise.then(res => {   
      return(res.data)
      })
    }
  }

  render() {
    ///////// PROVES STATE.INVENTORY GETS LOADED
    // let showMe = this.state.inventory.map((obj,i) => {
    //   return(
    //     <h3>Here: {obj.img} - {i}</h3>
    // )})
    return (
      <div>
       {/* |{showMe}|<br /> */}
        <Header />
        {/* {console.log("Here: "+this.state.inventory)} */}
        <Dashboard CurrentInventory = {this.state.inventory} />
        <Form getMethod = {this.getMethod}/>
      </div>

    );
  }
}

export default App;
