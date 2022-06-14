import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`./services.json`)
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
       <div id="services">
           <h2 className='text-center text-danger mt-5'>Our Services</h2>
           <div className="services-container container mt-4">
           {
               services.map(service => <Service key={service.time} service={service}></Service>)
           }
       </div>
       </div>
    );
};

export default Services;