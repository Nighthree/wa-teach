const Child = (props) => {
  const { name, number, children, state, setState } = props;

  return (
    <div>
      <div>
        child :{name} {state}
        <button type="button" onClick={() => setState((prev) => prev + 1)}>
          123
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Child;
