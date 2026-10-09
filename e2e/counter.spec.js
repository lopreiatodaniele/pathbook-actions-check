import { expect, test } from "@playwright/test";

test("pointer and keyboard actions preserve the counter contract", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("#room")).toHaveText("Published practice room");
  const count = page.getByRole("status");
  const add = page.getByRole("button", { name: "Add one", exact: true });
  const remove = page.getByRole("button", { name: "Remove one", exact: true });
  await expect(count).toHaveText("Count: 0");
  await remove.click();
  await expect(count).toHaveText("Count: 0");
  await add.click();
  await expect(count).toHaveText("Count: 1");
  await add.focus();
  await add.press("Enter");
  await expect(count).toHaveText("Count: 2");
  await expect(add).toBeFocused();
  await add.press("Space");
  await add.press("Enter");
  await expect(count).toHaveText("Count: 3");
  await page.getByRole("button", { name: "Reset count" }).click();
  await expect(count).toHaveText("Count: 0");
});

test("useful HTML remains when JavaScript is disabled", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4191/");
  await expect(
    page.getByRole("heading", { name: "Practice counter" }),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Add one" })).toBeHidden();
  await context.close();
});
