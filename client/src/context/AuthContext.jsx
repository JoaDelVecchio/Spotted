import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const updateUser = (updatedUser) => {
    setCurrentUser(updatedUser);
  };

  useEffect(
    () => localStorage.setItem("user", JSON.stringify(currentUser)),
    [currentUser]
  );

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
