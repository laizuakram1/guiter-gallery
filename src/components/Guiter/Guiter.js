import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Guiter.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Guiter = ({guiter, AddCartItem}) => {
    const {name, price, image} = guiter;
    return (
        <div className='guiter'  >
            <img width="200px" height="250px" src={image} alt="" />
            <div className='guiter-info mt-4'>
             <h4>{name}</h4>
            <p>price:${price}</p>
            </div>

          <Button onClick={() => AddCartItem(guiter)} className='addCartBtn'>Add To Cart
         <span className='addCartIcon'> <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon></span>
          </Button>
         
        </div>
        
    );
};

export default Guiter;