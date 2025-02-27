import useCustomHook from "./useCustomHook";

const Chiild02 = () => {
  const {
    state: { count },
    method: { setCount },
  } = useCustomHook({ name: "child02" });

  return (
    <div>
      {`child01 ->  `}
      {count}
      <button type="button" className="ms-3" onClick={() => setCount((prev) => prev + 1)}>
        add
      </button>
    </div>
  );
};

export default Chiild02;
