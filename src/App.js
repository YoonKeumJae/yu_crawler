import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Protecter from "./routes/Protecter";
import Home from "./routes/Home";
import List from "./routes/List";
import Bookmarks from "./routes/Bookmarks";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protecter>
        <Layout />
      </Protecter>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
