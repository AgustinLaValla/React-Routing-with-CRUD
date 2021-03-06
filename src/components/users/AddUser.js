import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const AddUser = () => {

    const initialValue = { name:'', username:'', email:'', phone:'', website:'' };
    const [user, setUser] = useState(initialValue);
    let history = useHistory();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({...user, [name]:value});
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/users', user);
        setUser(initialValue);
        history.push('/')

    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow-lg p-5 bg-light">
                <h2 className="text-center mb-4">Add User</h2>

                <form onSubmit={handleFormSubmit}>

                    <div className="form-group">
                        <input className="form-control" 
                                type="text" 
                                placeholder="Enter Your Name" 
                                name="name"
                                value={user.name}
                                onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input className="form-control" 
                                type="text" 
                                placeholder="Enter Your Username" 
                                name="username" 
                                value={user.username}
                                onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input className="form-control" 
                                type="email" 
                                placeholder="Enter Your Email" 
                                name="email" 
                                value={user.email}
                                onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input className="form-control" 
                                type="phone" 
                                placeholder="Enter Your Phone Number" 
                                name="phone" 
                                value={user.phone}
                                onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input className="form-control" 
                                type="text" 
                                placeholder="Enter Your Website" 
                                name="website" 
                                value={user.website}
                                onChange={handleInputChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-info btn-block">Add User</button>
                </form>
            </div>
        </div>
    )
}
