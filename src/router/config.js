import Home from "../home";
import UseState from "../view/01_useState";
import UseEffect from "../view/04_useEffect";
import UseRef from "../view/02_useRef";
import ReactRender from "../view/03_reactRender";
import UseMemo from "../view/05_useMemo";
import UseCallback from "../view/06_useCallback";

export const pageList = [
  {
    path: "useState",
    Component: UseState,
  },
  {
    path: "useRef",
    Component: UseRef,
  },
  {
    path: "reactRender",
    Component: ReactRender,
  },
  {
    path: "useEffect",
    Component: UseEffect,
  },
  {
    path: "useMemo",
    Component: UseMemo,
  },
  {
    path: "useCallback",
    Component: UseCallback,
  },
];

export default [
  {
    path: "/",
    Component: Home,
    children: pageList,
  },
];
