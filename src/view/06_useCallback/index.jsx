import { useState, useCallback } from "react";

const Page = () => {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2);
  const [total, setTotal] = useState(0);

  const onClick1 = () => {
    setNum1((prev) => prev + 1);
  };
  const onClick2 = () => {
    setNum2((prev) => prev + 1);
  };

  const callback = useCallback(() => {
    setTotal(num1 + num2);
  }, [num1, num2]);

  const aaa = () => {
    setTotal(num1 + num2);
  };

  return (
    <div>
      <div className="h3 border-bottom p-3">React useCallback</div>
      <div>
        <div className="mb-3">
          <span className="me-4">num1 : {num1}</span>
          <button type="button" className="btn btn-info" onClick={onClick1}>
            count1
          </button>
        </div>

        <div className="mb-3">
          <span className="me-4">num2 : {num2}</span>
          <button type="button" className="btn btn-info" onClick={onClick2}>
            count2
          </button>
        </div>
        <div>
          default total : {num1 + num2}, callback total: {total}
        </div>
        <button type="button" className="btn btn-primary" onClick={callback}>
          useCallback
        </button>
      </div>
    </div>
  );
};

export default Page;
