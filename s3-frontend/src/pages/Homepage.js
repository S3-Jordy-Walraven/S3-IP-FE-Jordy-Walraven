import React, { useEffect } from "react";
import AccountService from "../services/AccountService";
const Homepage = () => {
  const service = new AccountService();
  useEffect(() => {
    const data = service.getUser();
    if(data.data != null){
 console.log(service.parseJwt());
    }
   
  }, []);

  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
};

export default Homepage;
