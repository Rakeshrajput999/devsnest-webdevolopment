const CounterReducer = (state=0,action) => {
    
        // if(action.type=== "INC_NUMBER"){
        //     return(state+1)
        // }else if(action.type ==="DEC_NUMBER"){
        //      return(state -1)
        // }
        // else{
        //     return state
        // }

    //  or we can use swtichcase
    switch (action.type) {
        case "INC_NUMBER":
            return(state+1)
            
        case "DEC_NUMBER":
        return(state-1)
       
        default:return(state)
        

    }
        
}

export default CounterReducer