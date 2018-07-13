

import React from 'react';
import Product from '../Product/Product';
// import './App.css';

export default function Dashboard(props) {

  let productArray = props.CurrentInventory.map((prod , i) => {
    let {url,product,price} = prod;
    return (
      <Product key={i} url={url} product={product} price={price} />
    )
  })
      return (
        <div className="leftSide">

           {productArray} 

        </div>
 
      );
    }

  
