import React from 'react'
import Dash from './assets/Songs/Dash'
import { Route,Routes } from 'react-router-dom'
import S1 from './assets/Songs/s1'
import S2 from './assets/Songs/s2'
import S3 from './assets/Songs/s3'
import S4 from './assets/Songs/S4'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dash/>}/>
        <Route path='/S1' element={<S1/>}/>
        <Route path='/S2' element={<S2/>}/>
        <Route path='/S3' element={<S3/>}/>
        <Route path='/S4' element={<S4/>}/>
      </Routes>
    </>
  )
}

export default App