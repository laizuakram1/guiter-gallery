
import SetCartInfo from '../setCartInfo/SetCartInfo';
import React from 'react';

const Cart = ({cart}) => {
    // console.log(cart)
    return (
        <div>
            {
                cart.map(guiter => <SetCartInfo guiter = {guiter}></SetCartInfo>)
            }
            
        </div>
    );
};

export default Cart;