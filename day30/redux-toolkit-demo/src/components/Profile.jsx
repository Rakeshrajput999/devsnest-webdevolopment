import React from 'react'
import {useSelector ,useDispatch} from "react-redux";
import {updateAge,updateStatus,fetchUser} from "../reducers/UserReducer.jsx"
const Profile = () => {

    const {name,age,status} = useSelector((state) => {return state.user}) //this line of code get data from store 
    const dispatch =useDispatch()
   
    const updateage =(age)=>{
             dispatch(updateAge(age))
    }
    const updatename =()=>{
        dispatch(fetchUser())
    }
    const updatestatus =(status)=>{
        dispatch(updateStatus(status))
    }
    
    
    return (
        <div>
            hello from profile
            <p> my name is {name}</p>
            <p> my age is {age}</p>
            <p>status:{status}</p>
            
            <button onClick={()=>{updateage(40)}}>update age </button>
            <button onClick={()=>{updatename()}}>update name </button>
            <button onClick={()=>{updatestatus("programmer")}}>update name </button>



        </div>
    )
}

export default Profile
