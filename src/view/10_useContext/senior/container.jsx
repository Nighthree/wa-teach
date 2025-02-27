import { useContext } from "react";
import { SeniorContext } from "./seniorContetxt";

const Container = () => {
  const {
    setate: { isLogin },
    methods: { setIsLogin },
  } = useContext(SeniorContext);

  return (
    <div>
      <button type="button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin}
      </button>
    </div>
  );
};

export default Container;
