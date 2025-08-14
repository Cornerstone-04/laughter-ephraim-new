import { RouterProvider } from "react-router";
import { AppRoutes } from "./routes/routes";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Toaster />
      <RouterProvider router={AppRoutes} />
    </>
  );
};

export default App;
