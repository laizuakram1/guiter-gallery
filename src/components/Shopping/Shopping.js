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

      let newCart = [];
       newCart = [...cart, guiter];
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
               <div>
                    <h3>How React works?</h3>
                    <p>Ans: React is a fast and secure library in javascript. React id define logical structure and DOM accessed and manipulate. React DOM identify the update DOM structure.</p>
                    <h3>Props vs state?</h3>
                    <p>Ans: Props is passed component to another and state passed component only. Props is immutable but state is mutable. Props can read only but state are both.</p>
                    <h3>How useState works?</h3>
                    <p>Ans: State is a hook it will be pass functional state variable. You can set initial value and return a variable. Update this state value you can use useState.</p>
                </div>
            </div>
            <div className='shopping-cart'>
                <h4>Selected Guiters</h4>
                <Cart cart = {cart}></Cart>
                <br /><br />
              
              
            </div>
        </div>
    );
};

export default Shopping;