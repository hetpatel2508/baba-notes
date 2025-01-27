import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import SideBar from "./components/SideBar/SideBar";
import Notes from "./components/Notes/Notes";
import NewNote from "./components/NewNote/NewNote";

import "./App.css";

const Home = () => {
  return (
    <div className="container">
      <div className="left">
        <Profile />
        <SideBar />
      </div>
      <div className="right">
        <Notes />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <NewNote />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
