

import React, {Component } from 'react';
import axios from 'axios';
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
    imgurl: newUrl
  })
}
updateProduct(newProduct) {
  this.setState({
    name: newProduct
  })
}
updatePrice(newPrice) {
  this.setState({
    price: newPrice
  })
}
didCancel(){   // clear inputs
  this.setState({
    imgurl: "",
    name: "",
    price: 0
  })
}

postRequest(){
  let newProdObj={
    name: this.name,
    price: this.price,
    img: this.imgurl
  }
  let promise = axios.post('/api/inventory/', {newProdObj})
  promise.then(res => {   
      // let newest = res.data[res.data.length-1]
    this.didCancel()
  })}

    render() {
      return (
  
        <div className="form">
        <div className="fields">
          <input type="text" onChange={(e) => this.updateUrl(e.target.value)} value={this.state.imgurl} />
          <input type="text" onChange={(e) => this.updateProduct(e.target.value)} value={this.state.name} />
          <input type="text" onChange={(e) => this.updatePrice(e.target.value)} value={this.state.price} placeholder = "0" />
        </div>
        <div className="formButtons">
          <button onClick={() => this.didCancel()} >Cancel</button>
          <button onClick={() => this.postRequest()}>Add to Inventory</button>
        </div>
      </div>
 
      );
    }
  }
export default Form;