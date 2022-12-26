import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateUser } from '../../Features/UserSlice';

const EditUser = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [id, setId] = useState(location.state.id);
    const [name, setName] = useState(location.state.name);
    const [email, setEmail] = useState(location.state.email);

    const handleUpdate = (e) => {

        dispatch(updateUser({ id, name, email }));
        navigate('/showuser')


    }
    return (
        <div>
            <h1 className='text-center pt-5'>Update users : </h1>
            <div className=' d-flex align-items-center justify-content-center'>

                <form className='w-50' onSubmit={handleUpdate}>

                    <label >Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="name" className="form-control py-2 my-2" id="name" aria-describedby="name" placeholder="Enter Name" />

                    <label >Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control py-2 my-2" id="email" placeholder="Enter Email" />


                    <button type="submit" className="btn btn-primary mt-2">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;