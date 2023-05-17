import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const  handleadduser = event => {
event.preventDefault();
const form = event.target;
const name = form.name.value;
const email = form.email.value;
const user ={name,email};
console.log(user);


fetch('http://localhost:5000/users', {
  method: 'POST',
  headers :{
   'content-type': 'application/json'
  },
  body: JSON.stringify(user)
})
.then(res => res.json())
.then(data => {
  console.log(data);
  if(data.insertedId){
    alert('users added successfully')
    form.reset();
  }
})
  }
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>simple crud</h2>
    <form  onSubmit={handleadduser}>
      <input type="text" name="name" />
      <br />
      <input type="email" name="email" />
      <br />
      <input type="submit"  value="Add user"/>
    </form>
    </>
  )
}

export default App
