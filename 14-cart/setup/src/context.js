import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
const url = 'https://course-api.netlify.app/api/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = { 
  loading: false,
  cart: cartItems,
  total: 0, 
  amount: 0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'});
  }

  const removeItem = (id) => {
    dispatch({type: "REMOVE_ITEM", payload: id});
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
