import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Signin from "./routes/Signin";
import Signup from "./routes/SignUp";
import Protecter from "./routes/Protecter";
import Home from "./routes/Home";

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
