// import React from 'react'
// import { useState } from 'react'
// import './Css/StateEx.css'

// const StateEx=()=>{
//     const[visible,setVisible]=useState(true);


// const toggle =()=>
// {
//     setVisible(!visible)
// }

// setTimeout(()=>{
//     setVisible(false)
// },5000)
// return(
//     <>
//     {
//         visible?(
//             <div className='Card-wrapper'>
//                 <div className='Card'>
//                     <p className='cookieHead'>Great to have you here!</p>
//                     <p className='cookiedesc'>Your Coupon Code : XYZ</p>
//                     <div className='buttoncont'>
//                         <button className='accept' onClick={toggle}>Allow</button>
//                         <button className='decline' onClick={toggle}>Decline</button>
//                     </div>
//                 </div>
//             </div>
//         ):(
//             <div className='btn'>
//             <button  className='new' onClick={toggle}>
//                 <h2>Welcome</h2>
//             </button>
//             </div>
            
//         )
//     }
//     </>
   
// )
// }

// export default StateEx

import { useState } from "react";

const StateEx=()=>
{
    const[data,setData]=useState({
        username:'',
        password:''
    })

    const handleChange=(e)=>{
        setData({...data,[e.target.id]:e.target.id})
        console.log(data)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("final data")
        console.log(data.username)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username" id="username" onChange={handleChange}/>
            <input type="text" placeholder="password" id="password" onChange={handleChange}/>
            <input type="submit" value="Login"/>
        </form>
        </>
    )
}

export default StateEx