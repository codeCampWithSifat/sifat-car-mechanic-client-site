import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name,price,description,img, _id} = service;
    const navigate = useNavigate();

    const handleBooking = id => {
        navigate(`/booking/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3 className='m-2'>{name}</h3>
            <h5>{price}</h5>
            <p className='px-3'><small>{description}</small></p>
            <button onClick={() => handleBooking (_id)} className='btn btn-success my-3'>Book Service</button>
        </div>
    );
};

export default Service;