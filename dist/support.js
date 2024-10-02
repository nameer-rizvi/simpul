"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNode = typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null;
const isWindow = typeof window !== "undefined";
const isDocument = typeof document !== "undefined";
function inWindow(name) {
    return isWindow && name in window;
}
const isWindowNavigatorServiceWorker = inWindow("navigator") && "serviceWorker" in window.navigator;
const isWindowNotificationGranted = inWindow("Notification") && window.Notification.permission === "granted";
const isWindowLocalhost = inWindow("location") &&
    (window.location.hostname === "localhost" ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === "[::1]" ||
        // 127.0.0.1/8 is considered localhost for IPv4.
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/.test(window.location.hostname));
exports.default = {
    node: isNode,
    window: isWindow,
    document: isDocument,
    inWindow: inWindow,
    serviceWorker: isWindowNavigatorServiceWorker,
    NotificationGranted: isWindowNotificationGranted,
    localhost: isWindowLocalhost,
};
