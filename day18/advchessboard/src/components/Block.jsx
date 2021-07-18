const Block =(probs)=>{
     return(
         
         <div className="block">
             <div className = {probs.Colour === "black"?"blackbox":"whitebox"}>

             </div>
         </div>
     )
}

export default Block