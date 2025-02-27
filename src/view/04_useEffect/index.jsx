import Example01 from "./Example01";
import Example02 from "./Example02";
import Example03 from "./Example03";
import Example04 from "./Example04";

const Count = () => {
  return (
    <div>
      <div className="h3 border-bottom p-3">React useEffect</div>

      <div className="container">
        <div> useEffect 因為其特性有多種用法</div>
        <Example01 />
        <Example02 />
        <Example03 />
        <Example04 />

        <div className="mt-5">
          <div>圖示說明</div>
          <img
            className="img-fluid"
            src="https://gcdeng.com/assets/images/use-effect-4fc55959b33b51bf7003b92c6b0c0e6b.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Count;
