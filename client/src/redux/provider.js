'use client'
import { Provider } from 'react-redux'
import react from 'react'
import store from "./store"

const ReduxProvider = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ReduxProvider