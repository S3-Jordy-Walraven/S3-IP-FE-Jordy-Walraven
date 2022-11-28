import { cleanup } from "@testing-library/react";

import AccountService from "../services/AccountService";

let dummyJWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

afterEach(cleanup);

test("test JWT decode", () => {
  const service = new AccountService();
  let decodedJwt = service.parseJwt(dummyJWT);
  expect(decodedJwt).toHaveProperty("name");
  console.log(decodedJwt.name);
  expect(decodedJwt.name).toBe("John Doe");
});

test("user login and logout", () => {
  const service = new AccountService();
  service.setUser(dummyJWT);
  expect(service.loginUser()).toBe(dummyJWT);
  service.logoutUser();
  expect(service.loginUser()).toBe(null);
});
