import React from 'react'
import Child from './Child'
const Parent=()=>
{
    const name1='Abc'
    const name2='Xyz'
    return(
        <>
        <Child name={name1}/>
        <Child name={name2}/>
        </>
    )
    
}

export default Parent