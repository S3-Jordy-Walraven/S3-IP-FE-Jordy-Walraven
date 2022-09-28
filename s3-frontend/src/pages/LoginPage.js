import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import AccountService from "../services/AccountService";
import { useNavigate } from "react-router-dom";
const LoginPage = (props) => {
  const service = new AccountService();
  const navigate = useNavigate();
  return (
    <div>
      <GoogleOAuthProvider clientId="470134517886-f5sgc46163gim5b4dtba1j3egd06hmoa.apps.googleusercontent.com">
        <GoogleLogin
          buttonText="Sign In with Google"
          onSuccess={(response) => {
            props.value.userLogin(service.parseJwt(response.credential));
            service.setUser(response.credential);
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
      ;
    </div>
  );
};

export default LoginPage;
