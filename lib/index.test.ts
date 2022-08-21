import { expect, it } from "vitest";
import memoFn from ".";

it("check memofn", async () => {
  const fn = memoFn("a", 200, (a: string) => {
    return a + Date.now();
  });
  const a = fn("dog");
  await new Promise((res) => setTimeout(res, 50));
  expect(fn("dog")).eq(a);
  memoFn.remove("a");
  await new Promise((res) => setTimeout(res, 50));
  expect(fn("dog")).not.eq(a);
});

it("check memofn timeout", async () => {
  const fn = memoFn("a", 200, (a: string) => {
    return a + Date.now();
  });
  const a = fn("dog");
  await new Promise((res) => setTimeout(res, 50));
  expect(fn("dog")).eq(a);
  await new Promise((res) => setTimeout(res, 200));
  expect(fn("dog")).not.eq(a);
});
