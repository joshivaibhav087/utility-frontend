import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { axisThemes } from "./axisThemes";

import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import Dashboard from "./Screens/Dashboard";
import ManualQuery from "./Screens/Manual";
import PreQuery from "./Screens/Predefined";
import SignIn from "./Screens/SignIn";
import Summary from "./Screens/Summary";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={axisThemes}>
        <Navbar></Navbar>

        <Routes>
          <Route
            exact
            path="/"
            element={<RequireAuth page={<Dashboard />}></RequireAuth>}
          />
          <Route exact path="/login" element={<SignIn />} />
          <Route
            exact
            path="/summary"
            element={<RequireAuth page={<Summary />}></RequireAuth>}
          />
          <Route
            exact
            path="/predefined"
            element={
              <RequireAuth
               
                page={<PreQuery/>}
               
              ></RequireAuth>
            }
          />
          <Route
            exact
            path="/manual"
            element={
              <RequireAuth
               
                page={<ManualQuery />}
                
              ></RequireAuth>
            }
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
