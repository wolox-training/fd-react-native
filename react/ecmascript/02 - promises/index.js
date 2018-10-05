export function delay(TIME) {
  const reason = new Error('This time is too much !');
  return new Promise((resolve, reject) => {
    if (TIME > 500) {
      reject(reason);
    } else {
      resolve(TIME + 100);
    }
  });
}

export const asyncDelay = delay;
