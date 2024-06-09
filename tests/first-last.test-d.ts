import { assertType, test } from "vitest";
import { First, Last } from "../lib/first-last";

test("Type of the first element of the array is inferred correctly", () => {
  assertType<First<[number, string]>>(1);
  assertType<First<[string, number]>>("1");
});

test("Type of the last element of the array is inferred correctly", () => {
  assertType<Last<[number, string]>>("1");
  assertType<Last<[string, number]>>(1);
});
