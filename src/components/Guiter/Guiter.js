import React from 'react';
import './Guiter.css';

const Guiter = ({guiter}) => {
    const {name, price, image} = guiter;
    return (
        <div className='guiter'>
             <img width="200px" height="250px" src={image} alt="" />
            <div className='guiter-info'>
            <h4>{name}</h4>
            <p>price:${price}</p>
            </div>
           
        </div>
    );
};

export default Guiter;