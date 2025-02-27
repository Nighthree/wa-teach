import { useState, useEffect } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  const [other, setOther] = useState(0);

  const atClick = (e) => {
    setState((prev) => prev + 1);
  };

  const atOtherClick = (e) => {
    setOther((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("Example 02 useEffect", "state", state, "other", other);
  }, [state /*監聽對象*/]);

  return (
    <div className="p-3 border-bottom">
      <div>
        ．<code>[state /* 監聽對象 */]</code>，當監聽對象有變化時執行，像 vue 的 watch
      </div>
      <div>
        state: {state} , other : {other}
        <button type="button" className="btn btn-sm btn-primary ms-3" onClick={atClick}>
          state
        </button>
        <button type="button" className="btn btn-sm btn-primary ms-3" onClick={atOtherClick}>
          other
        </button>
      </div>
    </div>
  );
};

export default Example;
