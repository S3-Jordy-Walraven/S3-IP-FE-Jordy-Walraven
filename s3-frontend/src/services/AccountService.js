import axios from "axios";

const ACCOUNT_BASE_REST_API_URL = "http://localhost:8080/api/v1/account";
class AccountService {
  async AssignUser(jwt) {
    let account = AccountService.getUser(jwt);
    return account;
  }

  async loginUser() {
    return await axios.get(ACCOUNT_BASE_REST_API_URL, {
      withCredentials: true,
    });
  }

  logoutUser() {
    return axios.post(ACCOUNT_BASE_REST_API_URL + `?loginValue=""`, null, {
      withCredentials: true,
    });
  }

  async postUser(jwt) {
    console.log(jwt);
    return await axios.post(
      ACCOUNT_BASE_REST_API_URL + `?loginValue=${jwt.credential}`,
      null,
      {
        withCredentials: true,
      }
    );
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
