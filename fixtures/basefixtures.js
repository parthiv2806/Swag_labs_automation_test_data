import { test as base } from "@playwright/test";
import { Login_page } from "../pages/LoginPage";

export const test = base.extend({
  login: async ({ page }, use) => {
    const login1 = new Login_page(page);
    await use(login1);
  },
});
