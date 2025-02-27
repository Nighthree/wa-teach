import { useMyContext } from './myContext';

const Count = (props) => {
  const { count, setCount, theme } = useMyContext();

  const atClick = (e) => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>Count Component</div>
      Count : {count}, theme:{theme}
      <button type="button" onClick={atClick}>
        count
      </button>
    </div>
  );
};

export default Count;
