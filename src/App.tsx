import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthorizationLayout from "./Layouts/AuthorizationLayout/authorization-layout";
import Login from "./Pages/Login/login";
import Signup from "./Pages/Signup/signup";
import GeneralLayout from "./Layouts/GeneralLayout/general-layout";
import Home from "./Pages/Home/home";
import Movies from "./Pages/Movies/movies";
import Series from "./Pages/Series/series";
import Bookmark from "./Pages/Bookmark/bookmark";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./protected/protected-route";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <AuthorizationLayout>
              <Login />
            </AuthorizationLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthorizationLayout>
              <Signup />
            </AuthorizationLayout>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/home"
            element={
              <GeneralLayout>
                <Home />
              </GeneralLayout>
            }
          />

          <Route
            path="/movies"
            element={
              <GeneralLayout>
                <Movies />
              </GeneralLayout>
            }
          />

          <Route
            path="/tv-series"
            element={
              <GeneralLayout>
                <Series />
              </GeneralLayout>
            }
          />

          <Route
            path="/bookmark"
            element={
              <GeneralLayout>
                <Bookmark />
              </GeneralLayout>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
