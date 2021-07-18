const Card=(probs)=>{
    let {food ,calory}=probs
   return(
       <div className="Card">
           <section className="card_sec">
               <h1>{food}</h1>
               
               <p>you have consumed {calory} cals today</p>
           </section>
       </div>
   )
}
export default Card