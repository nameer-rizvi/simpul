const isWindow: boolean = typeof window !== "undefined";

const isDocument: boolean = typeof document !== "undefined";

function isWindowProperty(propertyName: string): boolean {
  return isWindow && propertyName in window;
}

const supportServiceWorker: boolean =
  isWindowProperty("navigator") && "serviceWorker" in window.navigator;

const isNotificationGranted: boolean =
  isWindowProperty("Notification") &&
  window.Notification.permission === "granted";

const isWindowLocalhost: boolean =
  isWindowProperty("location") &&
  (window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/.test(
      window.location.hostname
    ));

function isModule(moduleName: string): boolean {
  try {
    require.resolve(moduleName);
    return true;
  } catch {
    return false;
  }
}

export default {
  window: isWindow,
  document: isDocument,
  inWindow: isWindowProperty,
  serviceWorker: supportServiceWorker,
  NotificationGranted: isNotificationGranted,
  localhost: isWindowLocalhost,
  module: isModule,
};
