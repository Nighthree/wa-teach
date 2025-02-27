import { useState } from "react";
import { MyContext } from "./myContext";

import Count from "./count";
import Theme from "./theme";
import RenderTip from "../../components/RenderTip";

const BoxContext = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  const [value, setValue] = useState("");
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

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <div>
      <div className="h3 border-bottom p-3">React useContext</div>
      <input type="text" value={value} onChange={onChange} />

      <MyContext.Provider value={providerValue}>
        <RenderTip />
        <Count />
        <Theme />
      </MyContext.Provider>
    </div>
  );
};

export default BoxContext;
