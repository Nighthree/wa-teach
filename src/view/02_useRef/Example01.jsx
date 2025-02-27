import { useRef } from "react";
const Example01 = () => {
  const dom = useRef(null);

  const onClick = () => {
    console.log("onClick", dom.current);
  };

  const js = () => {
    const btn = document.getElementById("button");
    console.log("js", btn);
  };

  return (
    <div className="p-3 border-bottom">
      <div>
        绑定 Dom
        <button type="buton" ref={dom} onClick={onClick} id="button">
          按钮
        </button>
        <button type="button" onClick={js}>
          原生JS
        </button>
      </div>
    </div>
  );
};

export default Example01;
