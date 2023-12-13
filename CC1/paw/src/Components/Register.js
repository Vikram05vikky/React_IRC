import React from 'react'
import '../Assets/Register.css'
import { Link } from 'react-router-dom'
import Login from './Login'
function Register() {
    const Show=()=>
    {
        let a=document.getElementById('pass1').value;
        let b=document.getElementById('pass2').value;
       
        if(a==b)
        {
            // alert("Password matched ! Register Successful");
            <Link to='/Landing'></Link>
        }
        else{
            
            alert("Password not matched !");
        }
        
    }
  return (
    <div className='abc'>
        <div className='b2'>
    
    <form class="container1" onSubmit={Show}>
        <h2>Registration form</h2>
        <input type="text" name="" id="name" className="name" placeholder="Name" required/>

        <input type="tel" name="" id="phone" className="name"  placeholder="Phone No" required/>

        <input type="number" name="" id="age" className="name"  placeholder="Age" required/>

        <input type="email" name="" id="email" className="name"  placeholder="Email" required/>

        <input type="password" name="" id="pass1" className="name"  placeholder="Password" required/>
        <input type="password" name="" id="pass2" className="name"  placeholder="Confirm Password" required/>

        <input type="date" name="" id="dob" className="name"  placeholder="Date of Birth" required/>

        <input type="text" name="" id="Address" className="name"  placeholder="Address" required/>

        <button class="btnn">Register</button>
        <button class="btnn"><Link to='/'> Back</Link></button>
    </form>
        

    
</div>
    </div>
  )
}





export default Register