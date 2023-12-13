import React from 'react'
import '../Assets/Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Register from './Register'
const Login=()=> {

  const move=useNavigate();
  const Signin=()=>
  {
    let a=document.getElementById('name').value;
    let b=document.getElementById('pass1').value;

    if(a!='vikram' && b!='vikky')
    {
      alert("Username / Password invalid");
    }
    else if(a!='vikram' || b!='vikky')
    {
      
      alert("Username / Password invalid");
    }
    else{
      
        move('/Landing');
    }

  }
  return (
    <div className='v1' >
   <body className='b1'> 
    <form class="container" onSubmit={Signin}>
        <h2>Login</h2>
        <input type="text" name="" id="name" className="name" placeholder="Name" required/>

        <input type="password" name="" id="pass1" className="name"  placeholder="Password" required/>
       
        <button class="btn1" >Login</button>

        <button class='btn1'><Link to='/Register'>Register</Link></button>
    </form>
       
  </body>
  </div>
  )
}

export default Login