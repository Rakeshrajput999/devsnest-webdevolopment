import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
const initialState =
{
    name:"rakesh",
    age: 21,
    status:"coder"
}


export const fetchUser = createAsyncThunk(
    "fetchuser",
    async () =>{
        const res =await fetch ("https://jsonplaceholder.typicode.com/users")
        const data= await res.json()
        return data
    }
)

const userSlice = createSlice ({
    name:"person",
    initialState,
    reducers : {
        updateName(state,action){
            state.name=action.payload
        },
        updateAge(state,action){
            state.age=action.payload
        },
        updateStatus(state,action){
            state.status=action.payload
        },   
    },
    extraReducers:{
        [fetchUser.fulfilled]: (state,action)=>{
            state.name = action.payload[0].name
            
        }

    }
})

export default userSlice.reducer
export const {updateAge,updateName,updateStatus} =userSlice.actions





