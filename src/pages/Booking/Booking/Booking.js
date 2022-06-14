import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {bookingId} = useParams();
    return (
        <div style={{marginTop : "100px"}}>
            <h3>this is {bookingId}</h3>
        </div>
    );
};

export default Booking;