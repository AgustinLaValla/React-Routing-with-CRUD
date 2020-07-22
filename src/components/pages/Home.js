import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Home = () => {

    const url = 'http://localhost:4000/users';
    const [users, setUser] = useState([]);

    const loadUsers = async () => {
        const users = await axios.get(url);
        setUser([...users.data.reverse()]);
    }

    const deleteUser = async (id) => {
        await axios.delete(`${url}/${id}`);
    }

    useEffect(() => {
        loadUsers();
    }, [users]);

    return (
        <div className="container">
            <div className="px-4">
                <h1>Home Page</h1>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <table className="table shadow-lg">
                        <thead style={{ backgroundColor: '#0099aa', color: '#ffffff' }}>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className="btn btn-info" to={`/users/${user.id}`}>View</Link> &nbsp;
                                        <Link className="btn btn-outline-success" to={`/users/edit/${user.id}`}>Edit</Link> &nbsp;
                                        <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
