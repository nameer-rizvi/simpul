exports.window = typeof window !== "undefined";

exports.document = typeof document !== "undefined";

exports.inWindow = (property) => exports.window && property in window;

exports.serviceWorker =
  exports.inWindow("navigator") && "serviceWorker" in window.navigator;

exports.NotificationGranted =
  exports.inWindow("Notification") &&
  window.Notification.permission === "granted";

exports.localhost =
  exports.inWindow("location") &&
  (window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
    ));

exports.module = function isModuleSupported(name) {
  try {
    if (require.resolve(name)) return true;
  } catch {}
  return false;
};
