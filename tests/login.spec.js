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

test("problem_user", async ({ login }) => {
  await login.open();
  await login.loginM(
    logindata.problem_user.username,
    logindata.problem_user.password,
  );
  await login.verify_home_Page();
});

test("performance_glitch_user", async ({ login }) => {
  await login.open();
  await login.loginM(
    logindata.performance_glitch_user.username,
    logindata.performance_glitch_user.password,
  );
  await login.verify_home_Page();
});

test("error_user", async ({ login }) => {
  await login.open();
  await login.loginM(
    logindata.error_user.username,
    logindata.error_user.password,
  );
  await login.verify_home_Page();
});

test("visual_user", async ({ login }) => {
  await login.open();
  await login.loginM(
    logindata.visual_user.username,
    logindata.visual_user.password,
  );
  await login.verify_home_Page();
});

test("invalid passwoord", async ({ login }) => {
  await login.open();
  await login.loginM(
    logindata.invalidPassword.username,
    logindata.invalidPassword.password,
  );
  await login.Vrifytheerror(logindata.invalidPassword.errorMessage);
});

test("Invalid user", async ({ login }) => {
  await login.open();
  await login.loginM(
    logindata.invalidUser.username,
    logindata.invalidUser.password,
  );
  await login.Vrifytheerror(logindata.invalidUser.errorMessage);
});

test("emptyUsername", async ({ login }) => {
  await login.open();
  await login.loginM(
    logindata.emptyUsername.username,
    logindata.emptyUsername.password,
  );
  await login.Vrifytheerror(logindata.emptyUsername.errorMessage);
});

test("emptyPassword", async ({ login }) => {
  await login.open();
  await login.loginM(
    logindata.emptyPassword.username,
    logindata.emptyPassword.password,
  );
  await login.Vrifytheerror(logindata.emptyPassword.errorMessage);
});
