import { createSlice } from '@reduxjs/toolkit'
const initialState ={
    email:'',
    token : '',
    role :'',
    isLoggedIn : false,
    location:''
}
export const boxSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logoutUser: state => {
      return initialState
    },
    addLoginDetails: (state,action) => {
       return{
        ...state,
        email: action.payload.user?.email,
        token: action.payload?.token,
        isLoggedIn: action.payload?.isLoggedIn,
        role: action.payload?.user.role,
        location: action.payload?.user.location,
        id:action.payload?.user._id

      }
    },
    
  }
})
export const { incrementHeight, 
  incrementWidth, changeColor,
  incrementMarginLeft,
  changeToCircle } = boxSlice.actions

export default boxSlice.reducer