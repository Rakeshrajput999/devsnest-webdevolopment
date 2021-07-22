import { useState } from "react"

const Card=(probs)=>{
    let {item,food,setFood}=probs
    const handleClick=()=>
{
    let NewState =food.filter((el)=>el.id!==item.id)
    setFood(NewState)
}
   return(
       <div className="Card">
           <section className="card_sec">
               <h1>{item.title}</h1>
               
               <p>you have consumed {item.calory} cals today</p>
            <button onClick={handleClick}></button>
           </section>
       </div>
   )
}
export default Card