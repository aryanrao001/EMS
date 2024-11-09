import React, { createContext, useEffect, useState } from 'react'
export const AuthContext = createContext();
import { getLocalStorage } from '../utils/localStorage';

const AuthProvide = ({children}) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const {employees,admin} = getLocalStorage()
    setUserData({employees,admin});
  }, [])
  

  return (
    <>
      <AuthContext.Provider value={userData}  >
        {children}
      </AuthContext.Provider>
    </>
  
  )
}

export default AuthProvide