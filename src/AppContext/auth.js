import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [cart, setCart] = useState(0);
  const [userConnected, setUserConnected] = useState(false);
  const [user, setUser] = useState('');
  const [showSignIn, setShowSignIn] = useState(false);

  function saveToken(token) {
    setToken(token);
  }


  return (
    <AuthContext.Provider
      value={{
        token,
        saveToken,
        cart,
        setCart,
        showSignIn, setShowSignIn,
        userConnected,setUserConnected,
        user,setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
