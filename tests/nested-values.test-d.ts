import { assertType, test } from "vitest";
import { NestedValues } from "../lib/nested-values";

test("NestedValues requires type of object values", () => {
  type Speed = {
    bytes: number;
    bits: number;
    progress: number;
    bandwidth: number;
  };
  assertType<NestedValues<Speed>>(1);

  // @ts-expect-error
  assertType<NestedValues<Speed>>("bits");
});

test("NestedValues requires type of complex object values", () => {
  type Speedtest = {
    isp: string;
    upload: 123;
    ping: {
      error: null;
      low: number;
      high: number;
      progress?: boolean;
    };
  };

  assertType<NestedValues<Speedtest>>("isp");
  assertType<NestedValues<Speedtest>>(123);

  assertType<NestedValues<Speedtest>>(false);
  assertType<NestedValues<Speedtest>>(null);
  assertType<NestedValues<Speedtest>>({
    low: 1,
    high: 1,
    progress: false,
    error: null,
  });
});
