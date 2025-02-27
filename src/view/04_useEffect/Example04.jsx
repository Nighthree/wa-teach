import { useState, useEffect } from "react";

const Example = () => {
  const [state, setState] = useState(false);

  const atClick = (e) => {
    setState(!state);
  };

  useEffect(() => {
    let timeId;
    if (state) {
      console.log("start setInterval");
      timeId = setInterval(() => {
        console.log("run Interval");
      }, 1000);
    }
    return () => {
      if (state) {
        clearInterval(timeId);
        console.log("end setInterval");
      }
    };
  }, [state]);

  return (
    <div className="p-3 border-bottom">
      <div>．return 的函式在 component 銷毀的時候執行，像 vue 的 beforeDestroy ，比較常見是清除計時器</div>
      <div>
        state: {`${state}`}
        <button type="button" className="btn btn-sm btn-primary ms-3" onClick={atClick}>
          state
        </button>
      </div>
    </div>
  );
};

export default Example;
