import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import {updatePlace,updatePlaceData} from "../actions/index.jsx"
 
const Farm = () => {
    const Location = useSelector((state) => state.place)
    console.log(Location)
    const dispatch =useDispatch()
    return (
        <div>
            <div class="search-bar">
            <input class="input-bar" type="text" value={Location} onChange={(e) => {
              dispatch(updatePlace(e.target.value))
            }} placeholder="eg.Mungeli..." />
            <button class="input-button" 
             onClick={() => {dispatch(updatePlace(""))
                 dispatch(updatePlaceData(Location))}}
    ><i className="fas fa-cloud-sun"></i></button>
            </div>
            
        </div>
    )
}

export default Farm
