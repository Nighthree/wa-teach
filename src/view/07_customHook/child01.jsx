import useCustomHook from "./useCustomHook";

const Chiild01 = () => {
  const {
    state: { count },
    method: { setCount },
  } = useCustomHook({ name: "child01" });

  return (
    <div>
      {`child01 ->  `} {count}
      <button type="button" className="ms-3" onClick={() => setCount((prev) => prev + 1)}>
        add
      </button>
    </div>
  );
};

export default Chiild01;
