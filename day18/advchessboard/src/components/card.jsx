const Block =({probs})=>{
     return(
         <div className="block">
             <div className = {probs === "black"?"blackbox":"whitebox"}>

             </div>
         </div>
     )
}

export default Block