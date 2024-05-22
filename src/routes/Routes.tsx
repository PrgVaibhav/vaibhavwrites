import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../components/layout/RootLayout/RootLayout";
import { HomePage } from "../pages/home/HomePage";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      errorElement: <h1>404 Not Found</h1>,
      children: [{ path: "/", element: <HomePage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};
