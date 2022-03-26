import React from 'react';
import './SetCartInfo.css'


const SetCartInfo = ({guiter, ChoseOneBtn}) => {
    console.log(ChoseOneBtn);
    let items = [];
   ChoseOneBtn(items)

    return (
        <div>
            <p>{[...items,guiter.name]}</p>
            
        </div>
        
    );
};

export default SetCartInfo;