import React, { useState } from 'react';
import { useEffect } from 'react';
import Guiter from '../Guiter/Guiter';
import Cart from '../Cart/Cart';
import './Shopping.css';

const Shopping = () => {
    const [guiters, setGuiters] = useState([]);
    const [cart, setCart] = useState([]);

     useEffect( () => {
    fetch("guiters.json")
    .then(res => res.json())
    .then(data => setGuiters(data));
  }, [])

  const AddCartItem = (guiter) =>{
      let newCart = [...cart, guiter];
      setCart(newCart);
  }
    return (
        <div className='shopping-container container'>
            <div className='shopping-items'>
               <div className='guiter-container'>
               {
                    guiters.map(guiter => <Guiter 
                        key = {guiter.id}
                        guiter = {guiter}
                        AddCartItem = {AddCartItem}
                        ></Guiter>)
                }
               </div>
                
            </div>
            <div className='shopping-cart'>
                <h4>Cart summary</h4>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shopping;