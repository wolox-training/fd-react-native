import { isArray } from './utils';

export function min(...arg) {
  if (arg[0] === undefined) {
    return undefined;
  } else if (isArray(arg[0])) {
    return Math.min(...arg[0]);
  }
  return Math.min(...arg);
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
