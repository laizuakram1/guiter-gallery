import React from 'react';
import { Button } from 'react-bootstrap';
import './Guiter.css';

const Guiter = ({guiter}) => {
    const {name, price, image} = guiter;
    return (
        <div className='guiter'  >
            <img width="200px" height="250px" src={image} alt="" />
            <div className='guiter-info'>
             <h4>{name}</h4>
            <p>price:${price}</p>
            </div>

          <Button className='addCartBtn'>Add To Cart</Button>
         
        </div>
        
    );
};

export default Guiter;