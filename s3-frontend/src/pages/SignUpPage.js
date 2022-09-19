import React from "react";

import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import AccountService from "../services/AccountService";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <GoogleOAuthProvider clientId="121426112573-rrv397m3jcqarokprik1ruo3tv99q893.apps.googleusercontent.com">
      <GoogleLogin
        buttonText="Sign In with Google"
        onSuccess={(response) => {
          const service = new AccountService();
          service.getUser(response);
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
  );
};

export default SignUpPage;
