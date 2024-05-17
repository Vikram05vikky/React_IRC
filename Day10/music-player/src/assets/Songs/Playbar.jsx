import React from 'react'
import '../Songs/Playbar.css'
import '../Songs/Nav.css'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
function Playbar() {
  return (
        <>
        <div className='pb'>
            <h1 className='h22'>Standing by You</h1><br></br>
            <h2 className='h22'>Nish</h2><br></br><br></br>
            <div className='progbar'>
            <div className='icon-cont'>
            {/* <ChevronLeft /> */}
            <Play/>
            {/* <ChevronRight/> */}
            </div>
            <br></br>
            <div id="audio-progress-bar">
          <div id="audio-progress"></div>
        </div>
            
            </div>

        </div>
           
        </>
  )
}

export default Playbar