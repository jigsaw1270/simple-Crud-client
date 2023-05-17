import React from 'react';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';

const Update = () => {
    const loaduser = useLoaderData();

    const handleupdate = event => {
event.preventDefault();
const form =event.target;
const name = form.name.value;
const email = form.email.value;
console.log(name,email);
const updateuser = {name,email};


fetch(`http://localhost:5000/users/${loaduser._id}`,{
method: 'PUT',
headers:{
    'content-type': 'application/json'
},
body: JSON.stringify(updateuser)
})
.then(res => res.json())
.then(data => {
    console.log(data);
    if(data.modifiedCount >0){
        alert('User updated successfully')
    }
})
    }
    return (
        <div>
            <h1>Update information of {loaduser.name}</h1>

            <form onSubmit={handleupdate} >
                <input type="text" defaultValue={loaduser?.name} name="name" id="" />
                <br />
                <input type="email" name="email" defaultValue={loaduser?.email} id="" />
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;