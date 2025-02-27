import { useState, useEffect, createContext, useContext, useMemo } from "react";
import { observer } from "mobx-react-lite";

export const SeniorContext = createContext(null);

const SeniorContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const contextValue = {
    setate: {
      isLogin,
    },
    methods: {
      setIsLogin,
    },
  };

  return <SeniorContext.Provider value={contextValue}>{children}</SeniorContext.Provider>;
};

export default SeniorContextProvider;
