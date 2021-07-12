import React,{useState} from 'react'

export default function Counter() {
    const [count,setcount] =useState(0)

    return(
        <div>
            <button 
            className="counterbtn"
            onClick={()=> setcount(count +1)}>{count}</button>
        </div>
    )
}