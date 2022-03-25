import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const Cart = ({cart}) => {
    let name = [];
    for (const guiter of cart){
       name = guiter.name;
      
       
    }
    return (
        <div>
         <ul>
         <h5>{name}</h5>
         </ul>
        </div>
    );
};

export default Cart;