import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const User = () => {

    const initialState = { name: '', username: '', email: '', website: '', phone: '' };
    const [user, setUser] = useState(initialState);
    const { id } = useParams();

    const getUser = async () => {
        const users = await axios.get(`http://localhost:4000/users/${id}`);
        setUser({ ...users.data });
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <div className="container">
            <div className="w-50 shadow mx-auto">
                <ul className="user-data">
                    <li><strong>Name</strong>: {user.name}</li>
                    <li><strong>Username</strong>: {user.username}</li>
                    <li><strong>Email</strong>: {user.email}</li>
                    <li><strong>Phone</strong>: {user.phone}</li>
                    <li><strong>Website</strong>: {user.website}</li>
                </ul>
            </div>
        </div>
    )
}
