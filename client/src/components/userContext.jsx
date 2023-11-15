import { createContext, useState, useContext } from 'react';

// Create a context with initial values (in this case, an empty object)
export const UserContext = createContext({});

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Logic for handling user login
    setUser(userData);
  };

  const logout = () => {
    // Logic for handling user logout
    setUser(null);
  };

  // The context value that will be available to consuming components
  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook for accessing the context
export const useUser = () => {
  return useContext(UserContext);
};
