import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";
const LoginPage = () => {
  const navigate = useNavigate();
  const User = React.useContext(userContext);
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div style={{ marginTop: "20vh" }}>
        <div style={{ backgroundColor: "#212D3A", padding: "20vh", border: "5px", borderStyle: "solid", borderColor: "#688CC6", borderRadius: "5%" }}>

          <GoogleOAuthProvider clientId="470134517886-f5sgc46163gim5b4dtba1j3egd06hmoa.apps.googleusercontent.com">
            <GoogleLogin
              buttonText="Sign In with Google"
              onSuccess={(response) => {
                User.userLogin((response.credential));
                navigate("/");
              }}
              onFailure={(response) => {
                console.log(response);
              }}
              isSignedIn={true}
              useOneTap
              auto_select
            />
          </GoogleOAuthProvider>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;
