import { useRoutes } from "react-router";
import config from "./config";

const Router = () => {
  const routes = useRoutes(config);

  return routes;
};

export default Router;
