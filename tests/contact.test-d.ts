import { assertType, test } from "vitest";
import { Concat } from "../lib/contact";

test("concat", () => {
  assertType<Concat<[number, number], [string, string]>>([1, 2, "3", "4"]);
});
