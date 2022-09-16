import axios from "axios";

const ACCOUNT_BASE_REST_API_URL = "http://localhost:8080/api/v1/account";
class AccountService {
  loginUser(jwt) {
    console.log(jwt);
    return axios.post(
      ACCOUNT_BASE_REST_API_URL + `?loginValue=${jwt.credential}`,
      null,
      {
        withCredentials: true,
      }
    );
  }

  getUser() {
    return axios.get(ACCOUNT_BASE_REST_API_URL, { withCredentials: true });
  }

  parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }
}

export default AccountService;
