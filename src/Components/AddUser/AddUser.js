import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUsers } from '../../Features/UserSlice';

const AddUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    //counting total users
    const numberOfUsers = useSelector((state) => state.userReducer.users.length);

    //submiting user details
    const handleSubmit = (e) => {
        const user = { id: numberOfUsers + 1, name, email }

        dispatch(addUsers(user))
        navigate('/showuser', { replace: true })
        e.preventDefault();

    }
    return (
        <div className=' '>
            <h1 className='text-center pt-5'>Add users : </h1>
            <div className=' d-flex align-items-center justify-content-center'>

                <form className='w-50 ' onSubmit={handleSubmit}>

                    <label >Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="name" className="form-control py-2 my-2" id="name" aria-describedby="name" placeholder="Enter Name" />

                    <label >Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control py-2 my-2" id="email" placeholder="Enter Email" />


                    <button type="submit" className="btn btn-success mt-2">Add user</button>
                </form>
            </div>

        </div>
    );
};

export default AddUser;