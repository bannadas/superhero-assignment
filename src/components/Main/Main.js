import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';
import './Main.css'

const Main = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then( data => setUsers(data))
      },[])
    return (
        <div className="main-container">
            <div className="left-side">
       
        {
           users.map(user => <Users user={user}></Users>) 
        }
            </div>
            <div className="right-side">
        <h1>hello</h1>
            </div>
        </div>
    );
};

export default Main;