import { except, expect } from "@playwright/test";

export class Login_page {
  constructor(page) {
    this.page = page;
    this.username = page.locator("#user-name");
    this.password = page.locator("#password");
    this.loginBtn = page.locator("#login-button");
    this.errormessage = page.locator('[data-test="error"]');
  }

  async open() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async loginM(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  async Vrifytheerror(errorMessage) {
    await expect(this.errormessage).toHaveText(errorMessage);
  }
}
