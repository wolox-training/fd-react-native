import { isArray } from './utils';

export function min(arg) {
  if (arguments.length === 1) {
    if (isArray(arg)) {
      return Math.min(...arg);
    }
    return Math.min(arg);
  } else if (arguments.length > 1) {
    const args = [...arguments];
    return Math.min(...args);
  }
  return undefined;
}

export function copy(args) {
  if (isArray(args)) {
    return [...args];
  }
  const obj = {
    ...args
  };
  return obj;
}

export function reverseMerge(arg1, arg2) {
  return [...arg2, ...arg1];
}

export function filterAttribs(arg) {
  const { a, b, ...others } = arg;
  return others;
}
