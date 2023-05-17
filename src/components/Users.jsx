import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedusers = useLoaderData();
    const [users, setUsers] = useState(loadedusers)
   
    const handledelete = _id =>{
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'
        })
        
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedcount>0){
                alert('deleted successfully');
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining);
            }
        })
    }
    return (
        <div>
            <h2>total users {users.length}</h2>
            <div>
                {
                    users.map(user =><p key={user._id}>{user.name} : {user.email}
                    <Link to={`/update/${user._id}`}> <button>Update</button></Link>
                     <button onClick={() =>handledelete(user._id)}>delete</button></p> )
                }
            </div>
        </div>
    );
};

export default Users;