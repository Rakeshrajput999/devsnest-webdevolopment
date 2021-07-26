import React, { useState } from 'react'

const MemeCard = ({Meme ,setMeme}) => {
    const [Form, setForm] = useState({
        template_id:Meme.id,
        username:'RakeshRajput',
        password:"Rak12345",
        boxes :[]

    })

    const generateMeme =()=>{
        let url=`https://api.imgflip.com/caption_image?template_id=${Form.template_id}&username=${Form.username}&password=${Form.password}`
         Form.boxes.map((box,index)=>{
             url += `&boxes[${index}][text]=${box.text}`

         })
         fetch(url).then(res=>res.json())
         .then(data =>{
             setMeme({...Meme,url:data.data.url})
         })
         .catch((e)=>{
             alert(e.message)
         })
    }
    return (
        <div className="day22-meme">
            <img src={Meme.url} alt={Meme.name} />
            <div>
                {
                    [...Array(Meme.box_count)].map((el,index)=>{
                        return(<input type="text" 
                         key={index}
                         placeholder={`Meme caption - ${index+1}`}  onChange={(e)=>{
                            const newBoxes = Form.boxes
                            newBoxes[index]={text:e.target.value}
                            setForm({...Form ,boxes:newBoxes})

                        }}/>)
                    })
                }
            </div>
            <div>
                <button onClick={generateMeme}>Generate Meme</button>
                <button onClick={()=>{
                    setMeme(null)
                }}> Choose templates</button>
            </div>
        </div>
    )
}

export default MemeCard
