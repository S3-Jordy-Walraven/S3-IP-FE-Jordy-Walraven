import React, { useEffect } from "react";
import AccountService from "../services/AccountService";
const Homepage = () => {
  const service = new AccountService();
  useEffect(() => {
   service.loginUser();
  });

  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
};

export default Homepage;
