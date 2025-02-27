import { useRef, useState } from "react";
const Example02 = () => {
  const timer = useRef(null);
  const [second, setSecond] = useState(1000);

  const start = () => {
    const fn = () => {
      timer.current = setTimeout(() => {
        setSecond((prev) => {
          if (prev-- > 0) {
            fn();
            return prev-- > 0;
          } else {
            return 0;
          }
        });
      }, 1000);
    };
    fn();
  };

  const stop = () => {
    clearTimeout(timer.current);
  };

  return (
    <div className="p-3 border-bottom">
      <div>timer: {second}</div>
      <div>
        <button type="button" onClick={start}>
          start
        </button>
        <button type="button" onClick={stop}>
          stop
        </button>
      </div>
    </div>
  );
};

export default Example02;
