import React, { useState, useEffect } from 'react'
import axios from 'axios';

import "./InputBox.css";


const InputBox = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nameList, setNameList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/get').then((res) => setNameList(res.data))

    }, [])

    const submitName = () => {
        axios.post('http://localhost:5000/post', { firstName, lastName }).then((res) => console.log(res))
        window.location.reload(); 
    }

    const deleteName = (id) => {
        axios.delete(`http://localhost:5000/delete/${id}`)
        window.location.reload(); 
    }

    return (
        <div className="App">
            <h1>CMS Site</h1>
            <div className="form">
                <h3>Input Name:</h3>
                <input type="text" name="first_name" placeholder="First name" onChange={(e) => setFirstName(e.target.value)}></input>
                <input type="text" name="last_name" placeholder="Last name" onChange={(e) => setLastName(e.target.value)}></input>
                <button onClick={submitName}>Submit</button>
            </div>
            

            {nameList.map((name) => (
                <div key={name.user_id}>
                    <h2>First: {name.first_name} Last: {name.last_name}</h2>
                    <button onClick={() => deleteName(name.user_id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default InputBox;
