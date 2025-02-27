import { useState } from "react";

// 基本 useState 操作
const ButtonState = () => {
  const [state, setState] = useState(0);
  const [fnState, setFnState] = useState(0);

  // 一般的 setState
  const atClick01 = (e) => {
    setState(1);
  };

  // setState 可以透過 fn 傳入上次的值
  const atClick02 = (e) => {
    setFnState((prev) => {
      console.log("setState prev", prev);
      return prev + 1;
    });
  };

  return (
    <div>
      <div className="h3 border-bottom p-3">React useState</div>
      <div className="container">
        <div className="mb-3">
          <p className="border-bottom p-2">
            一般的 setState: {state}
            <button className="btn btn-primary btn-sm ms-3" onClick={atClick01}>
              button
            </button>
          </p>
        </div>
        <div className="mb-3">
          <p className="border-bottom p-2">
            setState 可以透過 fn 傳入上次的值: {fnState}
            <button className="btn btn-primary btn-sm ms-3" onClick={atClick02}>
              button
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ButtonState;
