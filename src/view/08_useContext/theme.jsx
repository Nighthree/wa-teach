import { useMyContext } from "./myContext";

const Theme = (props) => {
  const { theme, setTheme, count } = useMyContext();

  const atClick = (e) => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <div>Theme Component</div>
      Count : {count}, theme:{theme}
      <button type="button" onClick={atClick}>
        theme
      </button>
    </div>
  );
};

export default Theme;
