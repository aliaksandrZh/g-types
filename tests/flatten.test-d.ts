import { assertType, test } from "vitest";
import { Flatten } from "../lib/flatten";

type Speed = {
  bytes: number;
  bits: number;
  progress: number;
  bandwidth: number;
};

test("Flatten has proper keys with one level type", () => {
  assertType<Flatten<Speed>>({ bytes: 123 });
  assertType<Flatten<Speed>>({ progress: 333, bandwidth: 123 });
  assertType<Flatten<Speed>>({
    progress: 333,
    bandwidth: 123,
    bytes: 123,
    bits: 1,
  });
});

test("Flatten has proper keys", () => {
  type Speedtest = {
    isp: string;
    upload: Speed;
    ping: {
      low: number;
      high: number;
      progress?: number;
    };
  };

  assertType<Flatten<Speedtest>>({ isp: "123" });
  assertType<Flatten<Speedtest>>({ "ping.high": 123 });
  assertType<Flatten<Speedtest>>({ "upload.bandwidth": 123 });
  assertType<Flatten<Speedtest>>({ "ping.high": 123, "upload.bits": 32 });

  // Optional properties are skipped
  // @ts-expect-error
  assertType<Flatten<Speedtest>>({ "ping.progess": 123 });
});
