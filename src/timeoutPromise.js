// Previous name: "callbackTimeout"

const timeoutPromise = (callback, timeout = 500) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      try {
        callback();
        resolve();
      } catch (error) {
        reject(error);
      }
    }, timeout)
  );

module.exports = timeoutPromise;
