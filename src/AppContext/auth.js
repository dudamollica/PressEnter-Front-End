import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [carCount, setCarCount] = useState(0)

  function saveToken(token) {
    setToken(token);
  }


  return (
    <AuthContext.Provider
      value={{
        token,
        saveToken,
        carCount
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
