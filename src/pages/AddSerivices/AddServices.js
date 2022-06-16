import axios from 'axios';
import { useForm } from 'react-hook-form';
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/services',data)
    .then(res => {
        console.log(res)
        if(res.data.insertedId) {
            alert('Added Successfully');
            reset();
        }
    })
    .catch(error => {
        console.log(error)
    })
  }
    return (
        <div className='add-service'>
            <h2>Please Add A Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Enter Name' />
                <textarea {...register("description")} placeholder='Enter Your Description' />
                <input type="number" {...register("price")}  placeholder='Enter Your Price'/>
                <input type="number" {...register("time")}  placeholder='Enter Your Time'/>
                <input  {...register("img")} placeholder="Enter Your Image Link Here" />
                <input type="submit"  />
             </form>
        </div>
    );
};

export default AddServices;