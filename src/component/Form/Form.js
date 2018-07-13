

import React, {Component } from 'react';
// import './App.css';

class Form extends Component {
constructor(){
  super()
  this.state = {
    name:"",
    price: 0,
    imgurl: ""
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
export default Form;