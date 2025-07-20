import { createHashRouter, RouterProvider } from "react-router";
import routes from "./routers/index.jsx";

const router = createHashRouter(routes);
console.log(routes);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
