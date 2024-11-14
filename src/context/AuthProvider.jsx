import React, { createContext, useEffect, useState } from 'react'
export const AuthContext = createContext();
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const AuthProvide = ({children}) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage();
    const {employees} = getLocalStorage()
    setUserData(employees);
  }, [])
  

  return (
    <> 
      <AuthContext.Provider value={[userData,setUserData]}  >
        {children}
      </AuthContext.Provider>
    </>
  
  )
}

export default AuthProvide