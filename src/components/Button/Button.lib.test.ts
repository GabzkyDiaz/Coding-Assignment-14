import { isButtonDisabled } from "./Button.lib";

describe("isButtonDisabled", () => {
  test("returns true if button is disabled", () => {
    expect(isButtonDisabled(true)).toBe(true);
  });

  test("returns false if button is not disabled", () => {
    expect(isButtonDisabled(false)).toBe(false);
  });

  test("returns false if disabled is undefined", () => {
    expect(isButtonDisabled(undefined)).toBe(false);
  });
});
