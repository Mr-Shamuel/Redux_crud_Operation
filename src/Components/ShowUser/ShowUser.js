import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from '../../Features/UserSlice';

const ShowUser = () => {
    const navigate = useNavigate();
    const users = useSelector((state) => state.userReducer.users);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    }
    return (
        <div>
            <h1>List of Users : </h1>
            <table className='table w-60'>
                <thead>
                    <tr>
                        <th scope="col">#Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            const { id, name, email } = user;
                            return <tr key={id}>
                                <th scope="row">{id}</th>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>
                                    <Link to='/edituser' state={{ id, name, email }} className='btn btn-outline-success mx-2' >Edit</Link>
                                    <button onClick={() => { handleDelete(id) }} className='btn btn-outline-danger mx-2 '>Delete</button>
                                </td>

                            </tr>
                        }


                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ShowUser;