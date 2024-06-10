import { assertType, test } from "vitest";
import {
  IsBoolean,
  IsFunction,
  IsNumber,
  IsObject,
  IsString,
} from "../lib/guards";

test("IsString", () => {
  assertType<IsString<number>>(false);
  assertType<IsString<string>>(true);
});

test("IsNumber", () => {
  assertType<IsNumber<number>>(true);
  assertType<IsNumber<string>>(false);
});

test("IsBoolean", () => {
  assertType<IsBoolean<number>>(false);
  assertType<IsBoolean<boolean>>(true);
});

test("IsFunction", () => {
  assertType<IsFunction<() => any>>(true);
  assertType<IsFunction<{}>>(false);
});

test("IsObject", () => {
  assertType<IsObject<() => any>>(false);
  assertType<IsObject<{}>>(true);
});
