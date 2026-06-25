import { test } from "../fixtures/basefixtures";
import logindata from "../test_data/logindata.json";
test("Locked user", async ({ login }) => {
  await login.open();
  await login.loginM(
    logindata.lockedUser.username,
    logindata.lockedUser.password,
  );
  await login.Vrifytheerror(logindata.lockedUser.errorMessage);
});
