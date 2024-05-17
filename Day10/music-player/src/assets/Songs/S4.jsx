import React from 'react'
import '../Songs/d.css'
import Nav from './Nav'
import Playbar from './Playbar'
import Right from './Right'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
function S4() {
  const move =useNavigate();
  const mvri=()=>{
      move('/S1')
  }
  const mvle=()=>{
      move('/S3')
  }

  return (
    <div className='dv2'>
      <Nav/>
        <div className='bu1'>
          <button onClick={mvle}><ChevronLeft/></button>
                    <button className='but4' ></button>
                    <Playbar/>
          <button onClick={mvri}><ChevronRight/></button>
        </div>
    </div>
  )
}

export default S4