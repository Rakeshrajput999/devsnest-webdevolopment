import React from 'react'
import { useEffect, useState } from 'react'
import Templates from './Templates'
import MemeCard from './MemeCard'
import "./Day22.css"
const Day22 = () => {
    const [templates, settemplates] = useState([])
    const [Meme, setMeme] = useState(null)
    useEffect(() => {
            return( async() => {
             const res= await fetch("https://api.imgflip.com/get_memes")
             const Data= await res.json()
             settemplates(Data.data.memes)
        })
        
        },[])

    return (
       <div>
           {Meme ===null ? <Templates template={templates} setMeme={setMeme}/>: <MemeCard Meme={Meme} setMeme={setMeme}/>}
        </div>
    )
}

export default Day22
