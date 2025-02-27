import { useContext } from "react";
import { SeniorContext } from "./seniorContetxt";
import RenderTip from "../../../components/RenderTip";

const Container = () => {
  const {
    setate: { isLogin },
    methods: { setIsLogin },
  } = useContext(SeniorContext);

  return (
    <div>
      <RenderTip />
      <button type="button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin}
      </button>
    </div>
  );
};

export default Container;
