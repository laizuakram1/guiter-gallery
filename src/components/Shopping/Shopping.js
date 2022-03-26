import React, { useState } from 'react';
import { useEffect } from 'react';
import Guiter from '../Guiter/Guiter';
import Cart from '../Cart/Cart';
import './Shopping.css';
import { Button } from 'react-bootstrap';

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

  const ChoseOneBtn = ({items}) => {
    Math.random(items);
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
                        
                        ></Guiter>
                        )
                }
                
                  
                
               </div>
                
            </div>
            <div className='shopping-cart'>
                <h4>Selected Guiters</h4>
                <Cart cart = {cart} ChoseOneBtn = {ChoseOneBtn}></Cart>
                <br /><br />
                <Button onClick={ChoseOneBtn} className='choseBtn'>CHOSE 1 FOR ME</Button>
            </div>
        </div>
    );
};

export default Shopping;