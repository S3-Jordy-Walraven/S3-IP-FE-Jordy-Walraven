import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ColorStyle.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/GeneralPages/Homepage";
import LoginPage from "./pages/GeneralPages/LoginPage";
import { useState, useEffect } from "react";
import { userContext } from "./context/userContext";
import EffectUploadPage from "./pages/EffectPages/EffectUploadPage";
import AccountService from "./services/AccountService";
import EffectService from "./services/EffectService";
import EffectDetailPage from "./pages/EffectPages/EffectDetailPage";

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
    setStateUser(service.parseJwt(stateCredentials));
    service.setUser(stateCredentials);
  }
  function logoutUser() {
    setStateUser(null);
    service.logoutUser();
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
            <NavigationBar />
            <Routes>
              <Route exact path="/" element={<Homepage allEffects={effects} />} />
              <Route
                exact
                path="/sign-up"
                element={<LoginPage />}
              />

              <Route
                exact
                path="/effect/upload"
                element={<EffectUploadPage reloadCallback={ReloadEffects} />}
              />

              <Route
                exact
                path="/effect/details/:id"
                element={<EffectDetailPage />}
              />


            </Routes>
          </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
