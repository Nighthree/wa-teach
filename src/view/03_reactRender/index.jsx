import { useState, useRef } from "react";
import RenderTip from "../../components/RenderTip";

const Page = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleRef = () => {
    ref.current = ref.current + 1;
  };

  return (
    <div>
      <div className="h3 border-bottom p-3">React Render</div>

      <div>
        <RenderTip show={true} />
        <div className="p-3">
          <span className="me-3">{count}</span>
          <button type="button" className="btn btn-primary" onClick={handleCount}>
            count
          </button>
        </div>
        <div>
          <span className="me-3">{count}</span>
          <button type="button" className="btn btn-primary" onClick={handleRef}>
            ref
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
