import React from 'react'
// import './assets/Songs/Dash.css'
import '../Songs/da.css'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav';
import '../Songs/Nav.css'
function Dash() {

    const navigate=useNavigate();

    const handles1=()=>{
        navigate('/S1')
    }
    const handles2=()=>{
        navigate('/S2')
    }
    const handles3=()=>{
        navigate('/S3')
    }
    const handles4=()=>{
        navigate('/S4')
    }
  return (
        <>
        <div className='new'> 
        <div style={{backgroundColor:'black',height:'2cm'}}>
            <h1 className='h11'>Delight</h1>
        </div>
        {/* <Nav/> */}
           <div className='dv1'>
                <div>
                    <button className='b1' onClick={handles1}></button>
                </div>
                <div>
                    <button className='b2' onClick={handles2}>  </button>
                </div>
                <div>
                    <button className='b3' onClick={handles3}>  </button>
                </div>
                <div>
                    <button className='b4' onClick={handles4}> </button>
                </div>
               
            </div> 
            </div>
        </>
    )
}

export default Dash