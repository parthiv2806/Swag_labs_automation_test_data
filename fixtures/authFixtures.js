import { test as base } from "./basefixtures";
import logindata from "../test_data/logindata.json";

export const test = base.extend({
  lgfixturepage: async ({ login }, use) => {
    await lgpage.open();
    await lgpage.login(
      logindata.validUser.username,
      logindata.validUser.password,
    );
    await lgpage.verify_home_Page();
    await use();
  },
});
