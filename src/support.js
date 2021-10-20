exports.window = (prop) =>
  typeof window !== "undefined" && (prop ? prop in window : true);

exports.document = (prop) =>
  typeof document !== "undefined" && (prop ? prop in document : true);

exports.navigator = (prop) =>
  exports.window("navigator") && (prop ? prop in window.navigator : true);

exports.serviceWorker = () => exports.navigator("serviceWorker");

exports.Notification = () => exports.window("Notification");

exports.NotificationPermission = (permission = "granted") =>
  exports.Notification() && window.Notification.permission === permission;
