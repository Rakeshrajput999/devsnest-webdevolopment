import React from 'react'

const Templates = ({template ,setMeme }) => {
    return (
        <>
             <div>
            
            <h1>MemeGenerator</h1>

            {template.map((item)=>{
                return(<div key={item.id} className="day22-template" onClick={()=>{
                    setMeme(item)
                }}>
                    <div style={{backgroundImage:`url(${item.url})`}} 
                    className="day22-img">{item.name}</div>
                 </div>)
            })}

        </div>
        </>
    )
}

export default Templates
