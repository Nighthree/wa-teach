import { useState } from "react";
import { MyContext } from "./myContext";

import Count from "./count";
import Theme from "./theme";

const BoxContext = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const providerValue = {
    count,
    setCount,
    theme,
    setTheme,
  };
  // const providerValue = {
  //   state: {
  //     theme,
  //     count,
  //   },
  //   methods: {
  //     setCount,
  //     setTheme,
  //   },
  // };

  return (
    <div>
      <div className="h3 border-bottom p-3">React useContext</div>
      <MyContext.Provider value={providerValue}>
        <Count />
        <Theme />
      </MyContext.Provider>
    </div>
  );
};

export default BoxContext;
