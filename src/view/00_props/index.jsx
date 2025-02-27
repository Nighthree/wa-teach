import Child from "./child";
import { useState } from "react";

const Page = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <div>Father</div>

      <Child name="12344" number={23566} state={state} setState={setState}>
        <div>
          father import
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Child>
    </div>
  );
};

export default Page;
