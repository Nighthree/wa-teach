import { Outlet, useNavigate } from "react-router";
import { pageList } from "./router/config";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container layout">
      <aside>
        {pageList.map((item) => (
          <div className="mb-1" key={item.path}>
            <button type="button" className="btn btn-link" onClick={() => navigate(item.path)}>
              {item.path}
            </button>
          </div>
        ))}
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
