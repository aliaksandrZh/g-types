import { assertType, test } from "vitest";
import { FunctionArguments } from "../lib/function";

test("FunctionArguments", () => {
  assertType<FunctionArguments<() => any>>([]);
  assertType<FunctionArguments<(number, string) => any>>([1, "2"]);
  assertType<FunctionArguments<({ a: number }) => any>>([{ a: 123 }]);
});
