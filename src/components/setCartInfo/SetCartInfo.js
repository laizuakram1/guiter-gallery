import React from 'react';
import './SetCartInfo.css'


const SetCartInfo = ({guiter, ChoseOneBtn}) => {
    console.log(guiter);
    
    

    return (
        <div>
            <p>Name: {guiter.name}</p>
        </div>
        
        
    );
};

export default SetCartInfo;