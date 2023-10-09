import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "./pages/HomePage";
import EventPage, { loader as eventloader } from "./pages/EventPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventDetailPage, {
  loader as eventdetailloader,
} from "./pages/EventDetailPage";
import {action as eventaction } from './pages/NewEventPage'
import EventRootLayout from "./pages/EventRootLayout";
import Error from "./pages/Error";
const router = createBrowserRouter([
  {
    Path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/events",
        element: <EventRootLayout />,
        children: [
          { index: true, element: <EventPage />, loader: eventloader },
          {
            path: ":eventId",
            id:'event-detail',
            loader: eventdetailloader,
            children: [
              { index: true, element: <EventDetailPage /> },
              { path: "edit", element: <EditEventPage /> },
            ],
            
          },

          { path: "new", element: <NewEventPage />, action:eventaction},
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
