import { assertType, test } from "vitest";
import { NestedKeys } from "../lib/nested-keys";

type Speed = {
  bytes: number;
  bits: number;
  progress: number;
  bandwidth: number;
};

test("NestedKeys gets all keys from 1 level object", () => {
  assertType<NestedKeys<Speed>>("bandwidth");
  assertType<NestedKeys<Speed>>("bits");
  assertType<NestedKeys<Speed>>("progress");
});

test("NestedKeys gets all keys from 1 level object", () => {
  type Speedtest = {
    isp: string;
    upload: Speed;
    ping: {
      low: number;
      high: number;
      progress?: number;
    };
  };

  assertType<NestedKeys<Speedtest>>("isp");
  assertType<NestedKeys<Speedtest>>("low");
  assertType<NestedKeys<Speedtest>>("upload");
  // Optional are included
  assertType<NestedKeys<Speedtest>>("progress");

  // Optional properties are skipped
  // @ts-expect-error
  assertType<Flatten<Speedtest>>({ "ping.progess": 123 });
});
