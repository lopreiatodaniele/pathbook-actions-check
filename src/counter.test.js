import { expect, test } from "vitest";
import { nextCount } from "./counter.js";

test("adds and removes one within the range", () => {
  expect(nextCount(1, 1)).toBe(2);
  expect(nextCount(2, -1)).toBe(1);
});
test("keeps the lower and upper boundaries", () => {
  expect(nextCount(0, -1)).toBe(0);
  expect(nextCount(3, 1)).toBe(3);
});
test("a limit of zero stays zero in both directions", () => {
  expect(nextCount(0, 1, 0)).toBe(0);
  expect(nextCount(0, -1, 0)).toBe(0);
});
test("rejects invalid inputs rather than repairing unknown data", () => {
  expect(() => nextCount(-1, 1)).toThrow(RangeError);
  expect(() => nextCount(4, -1)).toThrow(RangeError);
  expect(() => nextCount("1", 1)).toThrow(RangeError);
  expect(() => nextCount(1, 0)).toThrow(RangeError);
  expect(() => nextCount(0, 1, -1)).toThrow(RangeError);
});
