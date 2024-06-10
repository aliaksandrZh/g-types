import { assertType, test } from "vitest";
import { Zip } from "../lib/zip";

test("Zip", () => {
  assertType<Zip<[number, string, boolean], [string, boolean, number]>>([
    [1, "1"],
    ["2", false],
    [true, 1],
  ]);
});
