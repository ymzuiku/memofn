# memofn

## Cache fn some times

```js
import { memoFn } from "memofn";

const fn = memoFn("the key", 1000, (a) => {
  return a * 2;
});

fn(10); // 20
fn(30); // 60
fn(10); // 20, use cache

memoFn.delete("the key"); // or memoFn.deleteAll();
fn(10); // 20, not use cache
fn(10); // 20, use cache
```

## Use Promise:

```js
import { memoFn } from "memofn";

const fn = memoFn("the key", 1000, (id) => fetch("/api/" + id));

fn(1).then((res) => {
  console.log(res); // abc
});
fn(2).then((res) => {
  console.log(res); // other
});
fn(1).then((res) => {
  console.log(res); // abc, use cache
});
```

## Fn args need can JSON.stringify:

```js
import { memoFn } from "memofn";

const fn = memoFn("the key", 1000, (fn) => fetch("/api/" + id));

fn(() => "aa").then((res) => {
  console.log(res);
});

// error, args JSON.stringify not diff
fn(() => "bb").then((res) => {
  console.log(res);
});
```
