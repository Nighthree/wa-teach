import { useMemo, useState, useEffect } from "react";

const Page = () => {
  const [data, setData] = useState([
    {
      name: "1",
      checked: false,
    },
    {
      name: "2",
      checked: false,
    },
    {
      name: "3",
      checked: false,
    },
  ]);

  const [all, setAll] = useState(false);

  const handleChange = (e) => {
    const { checked, name } = e.target;
    setData((prev) => {
      const newData = [...prev];
      const item = newData.find((item) => item.name === name);
      item.checked = checked;
      return newData;
    });
  };

  useEffect(() => {
    const state = data.every((item) => item.checked);
    setAll(state);
  }, [data]);

  const checkAll = useMemo(() => {
    return data.every((item) => item.checked);
  }, [data]);

  return (
    <div>
      <div className="h3 border-bottom p-3">React useMemo</div>
      <div>．類似 vue computed 用法 {`${all}`}</div>
      <div className="mb-2">
        {data.map((item) => (
          <label key={item.name} className="me-3">
            <input type="checkbox" checked={item.checked} onChange={handleChange} name={item.name} />
            {item.name}
          </label>
        ))}
      </div>
      <button
        type="button"
        onClick={() => {
          console.log(data);
        }}
      >
        log {`${checkAll}`}
      </button>
    </div>
  );
};

export default Page;
