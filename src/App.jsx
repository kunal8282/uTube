import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Header from "./Components/Header";
import VideoListContainer from "./Components/VideoListContainer";
import WatchPage from "./Components/WatchPage";

function App() {
  return (
    <RouterProvider router={appRouting} >
      <Header />
      <Body />
    </RouterProvider>
  );
}


const appRouting = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <VideoListContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      }
    ]
  },
]);


export default App;
