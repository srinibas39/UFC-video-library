import { createContext, useContext, useState } from "react";


export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => useContext(ModeContext);