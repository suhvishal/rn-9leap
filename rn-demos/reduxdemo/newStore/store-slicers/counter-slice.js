import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = { counter : 0 , errorMessage : '' }


function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject(200)
        }, 10000);
    })
}


export const addAsync = createAsyncThunk(
    'counter/addAsync',                   //counter/incrementAsync/fullfilled   action.payload    
    async (number, thunkAPI) => {
        console.log('inside payLoad creator', thunkAPI)
        try{
            const data = await getData()
            return data;
        }catch(ex){
            return thunkAPI.rejectWithValue('something went wrong')
        }
    }
)



const counterSlice = createSlice({
    name : 'counter', 
    initialState,
    reducers : {
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        }
    },
    extraReducers : {
        [addAsync.fulfilled] : (state, action)=>{
            state.counter = state.counter + action.payload
        },
        [addAsync.rejected] : (state, action)=>{
            state.errorMessage = action.payload
        }
    }
})

export const counterActions = counterSlice.actions


export default counterSlice.reducer;