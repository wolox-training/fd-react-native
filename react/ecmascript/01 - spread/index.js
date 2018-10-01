import { isArray } from './utils';

export default function min(arg) {
  if (isArray(arg)) {
    return Math.min();
  } else if (arg === undefined) {
    // empty
  } return arg;
}

export function copy(arg) {
  if (isArray(arg)) {
    return arg;
  }
}
