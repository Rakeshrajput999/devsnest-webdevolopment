import React, { useState } from 'react';
import Card from './Card';

function InputFiels(props) {
    const [food, setFood] = useState("")
    const [calory,setCalory] =useState("")

    return (
        <div>
            <input 
            type="text" 
            placeholder="food...."
            onChange={(e)=>{
                setFood(e.target.value)
            }}
            />
            <input 
            type="text" 
            placeholder="calory....." 
            onChange={(e)=>{
                setCalory(e.target.value)
            }}
            />
            <button 
            onClick={()=>{ let data={
                food: food ,
                calory:calory
            }
            console.log(data)
            setFood("")
            setCalory("")}}>
                add</button>
            
        </div>
    );
}

export default InputFiels;