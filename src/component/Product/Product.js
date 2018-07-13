
import React from 'react';

export default function Product(props) {

    return(
        <span>
            <h3>Product</h3>
         <div className="widget" key={props.i} >
         <img src={props.url} alt={props.product}/>
         {props.product}<br />{props.price}
       </div>
    </span>
    )
}