import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import css
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

// Import components
import { ToastContainer } from "react-toastify";

// Import utils
import { PrivateRoutes } from "./utils/PrivateRoutes";

// Import layouts
import { DefaultLayout } from "./layouts/DefaultLayout";
import { NoLayout } from "./layouts/NoLayout";

// Import pages
import { Landing } from "./pages/home/Landing";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { Error } from "./pages/error/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          {/* <Route
            path="/prueba"
            element={
              <NoLayout>
                <Prueba />
              </NoLayout>
            }
          /> */}
        </Route>

        {/* No auth required routes */}
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Landing />
            </DefaultLayout>
          }
        />
        <Route
          path="/login"
          element={
            <NoLayout>
              <Login />
            </NoLayout>
          }
        />
        <Route
          path="/register"
          element={
            <NoLayout>
              <Register />
            </NoLayout>
          }
        />
        <Route
          path="*"
          element={
            <NoLayout>
              <Error
                typeError={"404 Error"}
                title={"Page not found"}
                desc={
                  "Sorry, the page you are looking for could not be found or has been removed."
                }
              />
            </NoLayout>
          }
        />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
