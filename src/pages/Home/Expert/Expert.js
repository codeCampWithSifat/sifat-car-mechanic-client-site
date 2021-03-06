import React from 'react';
import './Expert.css'

const Expert = ({expert}) => {
    const {img,name,expertize} = expert ;
    return (
        <div className='col-lg-4 col-md-6 col-12 mt-4 expert'>
            <img src={img} alt="" />
            <h4 style={{color : "red", fontWeight:"350"}}>--{name}--</h4>
            <h5 style={{color : "gray"}}>{expertize}</h5>
        </div>
    );
};

export default Expert;