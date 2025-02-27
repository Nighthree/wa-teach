import Example01 from "./Example01";
import Example02 from "./Example02";

const Page = () => {
  return (
    <div>
      <div className="h3 border-bottom p-3">React useRef</div>
      <div className="container">
        <Example01 />
        <Example02 />
      </div>
    </div>
  );
};

export default Page;
