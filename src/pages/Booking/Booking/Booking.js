import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {bookingId} = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${bookingId}`)
        .then(res => res.json())
        .then(data => {
           setService(data)
        })
    },[bookingId])

    return (
        <div>
            <h3>this is {bookingId}</h3>
            <h3>{service.name}</h3>
            <img src={service.img} alt="" />
            <p><small>{service.description}</small></p>
        </div>
    );
};

export default Booking;