# day 18 inline styling and reausable components
---

1. 
`
 const  styleForButton ={
    backgroundColor:"red",
    color:"green"
} `

then calling be like
` <Button style={styleForButton}>Click</Button> `

disadvantages using inline css
 1 not supports 
 - media quary
 - animation 


2 code repeatition
3 loose performance


` <div classname = {title===""? "" :""}>
<img src ="url" height width alt>
<div>title {title || "random picture"}</div>
<Button style={{color: title ==="Title 3" ? "megenta":"aqua"}}>Click</Button> `

 important 
 `
iteration in card  in app
arr= 1,2,3,4,5
<ul>
{
 arr.map((item,index)=>
 {
     <li key = {index}>{item}</li>
 })
}
 </ul>

`
arr.map ((item,index)=>{
    <card title ={item} />
})














