export function delay(TIME) {
  const start = Date.now();
  const reason = new Error('This time is too much !');
  return new Promise((resolve, reject) => {
    if (TIME > 500) {
      reject(reason);
    } else {
      setInterval(() => {
        const delayedTime = Date.now() - start;
        resolve(delayedTime);
      }, TIME);
    }
  });
}

export const asyncDelay = delay;
