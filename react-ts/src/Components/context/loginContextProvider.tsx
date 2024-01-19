import React, { ReactNode,useState } from 'react';
import Logincontext from './logincontext';

interface LoginContextProviderProps {
  children: ReactNode;
}

const LoginContextProvider: React.FC<LoginContextProviderProps> = ({ children }) => {
  const [open,setopen]= useState(false)
  return (
    <Logincontext.Provider value={{open,setopen}}>
      {children}
    </Logincontext.Provider>
  );
};

export default LoginContextProvider;
