import { useState, createContext } from "react";

export const SeniorContext = createContext(null);

const SeniorContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const URL = new URLSearchParams();

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
