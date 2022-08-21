/* eslint-disable @typescript-eslint/no-explicit-any */
const cache: Record<string, unknown> = {};
const space = "_|_$memoFn*_!_";

// 缓存一个函数结果若干秒
export default function memoFn<T>(key: string, duration: number, fn: T) {
  return ((...args: unknown[]) => {
    const k = key + space + JSON.stringify(args);
    if (cache[k]) {
      return cache[k];
    }
    cache[k] = (fn as any)(...args);
    setTimeout(() => {
      delete cache[k];
    }, duration);
    return cache[k];
  }) as any as T;
}

function memoRemoveFn(key: string) {
  Object.keys(cache).forEach((k) => {
    if (k.split(space)[0] === key) {
      delete cache[k];
    }
  });
}

function memoRemoveAllFn() {
  Object.keys(cache).forEach((k) => {
    delete cache[k];
  });
}

memoFn.remove = memoRemoveFn;
memoFn.removeAll = memoRemoveAllFn;
