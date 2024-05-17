import React from 'react'
import '../Songs/d.css'
import Nav from './Nav'
import Playbar from './Playbar'
import Right from './Right'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
function S3() {
  const move =useNavigate();
  const mvri=()=>{
      move('/S4')
  }
  const mvle=()=>{
      move('/S2')
  }

  return (
    <div className='dv2'>
      <Nav/>
        <div className='bu1'>
          <button onClick={mvle}><ChevronLeft/></button>
                    <button className='but3' ></button>
                    <Playbar/>
          <button onClick={mvri}><ChevronRight/></button>
        </div>
    </div>
  )
}

export default S3