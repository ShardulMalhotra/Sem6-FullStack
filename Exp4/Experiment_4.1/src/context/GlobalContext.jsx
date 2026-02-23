import { createContext, useState } from "react";

// 1. Create Context
export const GlobalContext = createContext();

// 2. Create Provider
export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState("Guest");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
