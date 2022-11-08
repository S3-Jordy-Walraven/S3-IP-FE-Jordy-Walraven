import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ColorStyle.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import { useState, useEffect } from "react";
import { userContext } from "./userContext";
import EffectUploadPage from "./pages/EffectUploadPage";
import AccountService from "./services/AccountService";

function App() {
  const service = new AccountService();
  const [stateUser, setStateUser] = useState(null);
  const value = {
    user: stateUser,
    userLogin: loginUser,
    userLogout: logoutUser,
  };

  function loginUser(stateCredentials) {
    console.log(stateCredentials);
    setStateUser(stateCredentials);
  }

  function logoutUser() {
    setStateUser(null);
  }

  useEffect(() => {
    let user = service.loginUser();
    if (user !== null && user !== "") {
      setStateUser(service.parseJwt(user));
    }
  }, []);

  return (
    <div>
      <userContext.Provider value={value}>
        <Router>
          <NavigationBar value={value} />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route
              exact
              path="/sign-up"
              element={<LoginPage value={value} />}
            />
            <Route exact path="/effect/upload" element={<EffectUploadPage />} />
          </Routes>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
