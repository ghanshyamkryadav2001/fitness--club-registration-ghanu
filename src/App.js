
import React, { useState } from 'react';
// import { Link } from 'react-browser-router';
import './App.css'
// import List from './List';
const FitnessClubRegistration = () => {
    const [members, setMembers] = useState([]);
    const [member, setMember] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: ''
    });

    const handleChange = (event) => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setMembers([...members, member]);
        setMember({ name: '', email: '', phoneNumber: '', address: '' });
        alert('User added successfully');
    };

    return (
        <div className='main'>
            <div className='cart'>
                <h2>Fitness Club Registration</h2>
            </div>

            <div className='cart item'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:&nbsp; &nbsp; </label>
                        <input type="text" id="name" name="name" value={member.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:&nbsp;&nbsp; &nbsp; </label>
                        <input type="email" id="email" name="email" value={member.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Number: </label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={member.phoneNumber} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="address">Address: </label>
                        <input type="text" id="address" name="address" value={member.address} onChange={handleChange} />
                    </div>
                    <button type="submit">Add Member</button>
                </form>
            </div>
            <div className='cart'>
                <button className='cart' onClick={() => setMembers([])}>View Member List</button>
            </div>

            <div className='cart list'>
                {members.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.map((m, index) => (
                                <tr key={index}>
                                    <td>{m.name}</td>
                                    <td>{m.email}</td>
                                    <td>{m.phoneNumber}</td>
                                    <td>{m.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

        </div>
    );
};

export default FitnessClubRegistration;