import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ColorStyle.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/sign-up" element={<SignUpPage/>} />
    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
