import Home from "../home";
import Props from "../view/00_props";
import UseState from "../view/01_useState";
import UseEffect from "../view/04_useEffect";
import UseRef from "../view/02_useRef";
import ReactRender from "../view/03_reactRender";
import UseMemo from "../view/05_useMemo";
import UseCallback from "../view/06_useCallback";
import CustomHook from "../view/07_customHook";
import Context from "../view/08_useContext";

export const pageList = [
  {
    path: "props",
    Component: Props,
  },
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
  {
    path: "customHook",
    Component: CustomHook,
  },
  {
    path: "context",
    Component: Context,
  },
];

export default [
  {
    path: "/",
    Component: Home,
    children: pageList,
  },
];
