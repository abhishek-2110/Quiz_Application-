import React, { createContext, useContext, useState } from 'react';

// Create the UserAuthContext
const UserAuthContext = createContext();

// Custom hook to use the context
export const useUserAuth = () => useContext(UserAuthContext);

// Provider for wrapping the app
export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load user from localStorage
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Save user to localStorage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Clear user from localStorage
  };

  return (
    <UserAuthContext.Provider value={{ user, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};
