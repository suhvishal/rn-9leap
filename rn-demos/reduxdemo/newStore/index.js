import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './store-slicers/counter-slice'
//configure a newstore 

const newStore = configureStore({
    reducer : {
        counterSlice  
    }
})

export default newStore;