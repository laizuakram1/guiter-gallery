
import SetCartInfo from '../setCartInfo/SetCartInfo';
import React from 'react';

const Cart = ({cart, ChoseOneBtn}) => {
    // console.log(cart)
 
    return (
        <div>
            {
                cart.map(guiter => <SetCartInfo 
                    guiter = {guiter}
                    ChoseOneBtn = {ChoseOneBtn}
                
                ></SetCartInfo>)
            }
            
        </div>
    );
};

export default Cart;