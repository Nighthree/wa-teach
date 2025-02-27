import { useEffect } from 'react';

const Example = () => {
  console.log('component created');
  const createdTime = new Date().getTime();

  // [] 是監聽內容，如果陣列是空的，那麼 useEffect 只會在初始化的時候
  useEffect(() => {
    const mountedTime = new Date().getTime();
    console.log('Example 01 useEffect');
    console.log('時間差', mountedTime - createdTime, '毫秒');
  }, []);

  return (
    <div className="p-3 border-bottom">
      ．第二參數 <code>[]</code> 是監聽內容，如果陣列是空的，那麼 <code>useEffect</code> 只會在初始化的時候執行一次，像
      vue 的<code> mounted</code> 那樣在 HTML 渲染後執行。
    </div>
  );
};

export default Example;
