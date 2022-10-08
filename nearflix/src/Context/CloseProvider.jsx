import React, { createContext, useState, useContext } from "react";

export const CloseContext = createContext();
export const CloseDispatchContext = createContext(null);

export const useClose = () => useContext(CloseContext)


export default function CloseProvider ({ children }) {
  const [close, setClose] = useState(true)

  return (
    <>
    
      <CloseDispatchContext.Provider value={setClose}>
      {children}
      </CloseDispatchContext.Provider>
    </>
  )
}

