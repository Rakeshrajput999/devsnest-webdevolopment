
import React from 'react'
import {incNumber,decNumber} from "../action"
import { useSelector ,useDispatch} from 'react-redux'

const Counter = () => {
    const Count =useSelector((state)=>state.Counter)
    const Dispatch =useDispatch()
    return (
        <div>
            <h1>Counter using Redux</h1>
            <button onClick={()=>{
                Dispatch(decNumber())
            }}>-</button>
            <span> {Count}</span>
            <button onClick={()=>{
                Dispatch(incNumber())
            }}>+</button>
            
        </div>
    )
}

export default Counter
