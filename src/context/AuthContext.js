import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null);

  const login = (email) => {
    setEmail(email);
  };

  const logout = () => {
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
