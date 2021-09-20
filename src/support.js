exports.window = (prop) =>
  typeof window !== "undefined" && (prop ? prop in window : true);

exports.document = (prop) =>
  typeof document !== "undefined" && (prop ? prop in document : true);

exports.serviceWorker = () =>
  exports.window("navigator") && "serviceWorker" in window.navigator;

exports.Notification = () => exports.window("Notification");

exports.NotificationPermission = (permission = "granted") =>
  exports.Notification() && window.Notification.permission === permission;
