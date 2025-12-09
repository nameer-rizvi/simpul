const isNode: boolean =
  typeof process !== "undefined" && !!process?.versions?.node;

const isWindow: boolean = typeof window !== "undefined";

const isDocument: boolean = typeof document !== "undefined";

function inWindow(name: string): boolean {
  return isWindow && name in window;
}

const isWindowNavigatorServiceWorker: boolean =
  inWindow("navigator") && "serviceWorker" in window.navigator;

const isWindowNotificationGranted: boolean =
  inWindow("Notification") && window.Notification.permission === "granted";

const isWindowLocalhost: boolean =
  inWindow("location") &&
  (window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/.test(
      window.location.hostname
    ));

export default {
  node: isNode,
  window: isWindow,
  document: isDocument,
  inWindow: inWindow,
  serviceWorker: isWindowNavigatorServiceWorker,
  NotificationGranted: isWindowNotificationGranted,
  localhost: isWindowLocalhost,
};
