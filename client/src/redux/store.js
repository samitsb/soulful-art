import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducerslices/counterSlice'
import boxSlice from './reducerslices/boxSlice'
import userSlice from './reducerslices/userSlice'

 const store = configureStore({
  reducer: {
    counter: counterSlice,
    box: boxSlice,
    user: userSlice
  },
}) 
export default store