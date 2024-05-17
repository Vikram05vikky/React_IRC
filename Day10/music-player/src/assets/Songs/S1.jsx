import React from 'react'
import '../Songs/d.css'
import Nav from './Nav'
import Playbar from './Playbar'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
function S1() {
  const move =useNavigate();
  const mvri=()=>{
      move('/S2')
  }
  const mvle=()=>{
      move('/S4')
  }

  return (
    <div className='dv2'>
      <Nav/>
        <div className='bu1'>
          <button onClick={mvle}><ChevronLeft/></button>
                    <button className='but1' ></button>
                    <Playbar/>
          <button onClick={mvri}><ChevronRight/></button>
        </div>
    </div>
  )
}

export default S1