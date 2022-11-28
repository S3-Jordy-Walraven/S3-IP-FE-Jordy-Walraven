import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ColorStyle.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import { useState, useEffect } from "react";
import { userContext } from "./userContext";
import EffectUploadPage from "./pages/EffectPages/EffectUploadPage";
import AccountService from "./services/AccountService";
import EffectService from "./services/EffectService";

function App() {
  const service = new AccountService();
  const effectService = new EffectService();
  const [stateUser, setStateUser] = useState(null);
  const [effects, setEffects] = useState([]);
  const value = {
    user: stateUser,
    userLogin: loginUser,
    userLogout: logoutUser,
  };

  function loginUser(stateCredentials) {
    setStateUser(stateCredentials);
  }
  function logoutUser() {
    setStateUser(null);
  }

  function ReloadEffects(state) {
    async function GetEffects() {
      setEffects(await effectService.getAllEffects());
    }
    if (state !== false) GetEffects();
  }

  useEffect(() => {
    let user = service.loginUser();
    if (user !== null && user !== "") {
      setStateUser(service.parseJwt(user));
    }
    console.log(effectService.getAllEffects());
    setEffects(effectService.getAllEffects());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div data-testid="app-1">
      <userContext.Provider value={value}>
        <Router>
          <NavigationBar value={value} />
          <Routes>
            <Route exact path="/" element={<Homepage allEffects={effects} />} />
            <Route
              exact
              path="/sign-up"
              element={<LoginPage value={value} />}
            />
            <Route
              exact
              path="/effect/upload"
              element={<EffectUploadPage reloadCallback={ReloadEffects} />}
            />
          </Routes>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
