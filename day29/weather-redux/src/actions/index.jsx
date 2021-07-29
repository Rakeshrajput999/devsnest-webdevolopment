const updatePlace =(place) =>{
    return({
        type:"UPDATE_PLACE",
        payload:place
    })
}

const updatePlaceData = (place) =>{
    return(  (dispatch) => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=b2fd3e03718846b5aac165256212707&q=${place}`)
        .then((res)=> res.json())
        .then((data)=>{
            // console.log(data);
            dispatch({
                type:"UPDATE_PLACE_DATA",
                payload:data
            })

        })
    })
}
export {updatePlace ,updatePlaceData}


