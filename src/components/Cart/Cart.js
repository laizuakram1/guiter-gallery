import React from 'react';

const Cart = ({cart}) => {
    let name = '';
    for (const guiter of cart){
       name = guiter.name;
      
       
    }
    return (
        <div>
          <h2>{name}</h2>
        </div>
    );
};

export default Cart;