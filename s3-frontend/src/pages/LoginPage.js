import React from "react";
import { LoginButton } from "../components/LoginButton";

const LoginPage = (props) => {
  return (
    <div>
      <LoginButton value={props.value} />
    </div>
  );
};

export default LoginPage;
