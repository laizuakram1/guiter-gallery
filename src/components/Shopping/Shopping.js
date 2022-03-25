import React, { useState } from 'react';
import { useEffect } from 'react';
import Guiter from '../Guiter/Guiter';
import './Shopping.css';

const Shopping = () => {
    const [guiters, setGuiters] = useState([])

     useEffect( () => {
    fetch("guiters.json")
    .then(res => res.json())
    .then(data => setGuiters(data));
  }, [])
    return (
        <div className='shopping-container container'>
            <div className='shopping-items'>
               <div className='guiter-container'>
               {
                    guiters.map(guiter => <Guiter guiter = {guiter}></Guiter>)
                }
               </div>
                
            </div>
            <div className='shopping-cart'>
                <h3>shopping summary</h3>
            </div>
        </div>
    );
};

export default Shopping;