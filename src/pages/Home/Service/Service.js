import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name,price,description,img} = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3 className='m-2'>{name}</h3>
            <h5>{price}</h5>
            <p className='px-3'><small>{description}</small></p>
        </div>
    );
};

export default Service;