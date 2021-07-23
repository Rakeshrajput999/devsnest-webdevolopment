import React, { useEffect, useState } from 'react';

function Api(props) {
    const [posts,setPosts] =useState([])
    const fetchItem = async()=>{
        const data =  await fetch("https://jsonplaceholder.typicode.com/posts")
        const jsonData     =  await data.json()
        // const textData   =    data.text()
        setPosts(jsonData)
        // console.log(textData);
    }
    useEffect(()=> {

        fetchItem()
    },[])
    
    return (
        <div>
            {posts.map((e)=>{
                return(
                    <>
                   
                    <h3 key={e.id}>{e.id}</h3>
                   <h1 key={e.id}>{e.userId}</h1>
                    <h1 key={e.id}>{e.title}</h1>
                    <h4 key={e.id}>{e.body}</h4>

                    </>
                )
            })}
        </div>
    );
}

export default Api;