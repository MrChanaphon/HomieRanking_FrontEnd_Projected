import React, { createContext, useState } from 'react';

export const APIContext = createContext();

export const APIProvider = ({ children }) => {
    const [apiUrl] = useState("https://crispy-waddle-975xjvgxqrvrhpx6j-3001.app.github.dev/"); //ใส่ port backend
  
    return (
      <APIContext.Provider value={{ apiUrl }}>
        {children}
      </APIContext.Provider>
    );
  };
  
export const useApi = () => useContext(APIContext);