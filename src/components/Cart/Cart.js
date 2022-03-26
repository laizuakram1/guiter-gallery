
import SetCartInfo from '../setCartInfo/SetCartInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Cart = ({cart}) => {
   const [choseOne, setChoseOne] = useState([])
    
    const randomOne = (cart) => {
        if(cart.length >= 0){
            let random = cart[Math.floor(Math.random() * cart.length)]
           
            setChoseOne(random);
            
            alert(random.name);
        }
    }
 
    return (
        <div>
            {
                cart.map(guiter => <SetCartInfo guiter = {guiter} key = {guiter.id}></SetCartInfo>)
            }
              <Button onClick={() =>randomOne(cart)} className='choseBtn'>CHOSE 1 FOR ME</Button>
        </div>
    );
};

export default Cart;