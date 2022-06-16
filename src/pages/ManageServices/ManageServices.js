import { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services , setServices] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])

    const handleDelete = id => {

        if(window.confirm('Are you sure ? You want to delete it')) {
            fetch(`http://localhost:5000/services/${id}`,{   
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0) {
                alert('Deleted Successfully');
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            }
        })
        }
    }
    return (
        <div>
            <h3>Manager Our Services</h3>
            {
                services.map(service => <div>
                    <h3>{service.name}</h3>
                    <button onClick={() => handleDelete(service._id)}>Delete Service</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;