import { useState, useEffect } from 'react';

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
    console.log('Example 03 useEffect', 'state', state, 'other', other);
  });

  return (
    <div className="p-3 border-bottom">
      <div>．沒有帶第二參數的時候 component re-render 都會發動</div>
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
