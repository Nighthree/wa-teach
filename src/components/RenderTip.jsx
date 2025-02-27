import { useRef, useEffect } from "react";

const RenderTip = ({ show = false, name = "" }) => {
  const ref = useRef(1);

  useEffect(() => {
    ref.current += 1;
    console.log("render Tip ->", ref.current);
  });

  return (
    <div className={show ? "d-flex p-1" : "d-none"}>
      <span className="ms-auto">
        {name ? `${name}:` : ""}
        {ref.current}
      </span>
    </div>
  );
};

export default RenderTip;
