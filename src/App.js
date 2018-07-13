import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      inventory:[{
        url:"http://Widgets.com/images/blue-widgets.jpg",
        product: "Blue Widget",
        price: 14.99
      },
      {
        url:"http://Widgets.com/images/red-widgets.jpg",
        product: "Red Widget",
        price: 15.99
      }
    ],
      url: "",
      product: "",
      price: 0
    }
  }
  updateUrl(newUrl) {
    this.setState({
      url: newUrl
    })
  }
  updateProduct(newProduct) {
    this.setState({
      product: newProduct
    })
  }
  updatePrice(newPrice) {
    this.setState({
      price: newPrice
    })
  }
  didCancel(){  // WORKS! at 12:03pm
    this.setState({
      url: "",
      product: "",
      price: 0
    })
  }
  

  render() {
    return (
      <div className="form">
        <div className="fields">
          <input type="text" onChange={(e) => this.updateUrl(e.target.value)} value={this.state.url} />
          <input type="text" onChange={(e) => this.updateProduct(e.target.value)} value={this.state.product} />
          <input type="text" onChange={(e) => this.updatePrice(e.target.value)} value={this.state.price} placeholder = "0" />
        </div>
        <div className="formButtons">
          <button onClick={() => this.didCancel()} >Cancel</button>
          <button>Add to Inventory</button>
        </div>
      </div>
    );
  }
}

export default App;
