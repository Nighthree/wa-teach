import { useState } from "react";

const useCustomHook = (props) => {
  const { name } = props;
  const [count, setCount] = useState(0);

  console.log("props.name =>", name);

  return {
    state: { count, name },
    method: { setCount },
  };
};

export default useCustomHook;
