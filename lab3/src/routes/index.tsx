import { RouteObject } from "react-router-dom";

import Characters from "./Characters";
import Comics from "./Comics";
import Series from "./Series";

export const routes: RouteObject[] = [
  {
    path: "404",
    element: <div>Not Found</div>,
  },
  {
    path: "/",
    element: <Characters />,
  },
  {
    path: "/comics",
    element: <Comics />,
  },
  {
    path: "/series",
    element: <Series />,
  },
];
