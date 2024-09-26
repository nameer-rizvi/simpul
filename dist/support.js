"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isWindow = typeof window !== "undefined";
const isDocument = typeof document !== "undefined";
function isWindowProperty(propertyName) {
    return isWindow && propertyName in window;
}
const supportServiceWorker = isWindowProperty("navigator") && "serviceWorker" in window.navigator;
const isNotificationGranted = isWindowProperty("Notification") &&
    window.Notification.permission === "granted";
const isWindowLocalhost = isWindowProperty("location") &&
    (window.location.hostname === "localhost" ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === "[::1]" ||
        // 127.0.0.1/8 is considered localhost for IPv4.
        window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)) === true;
function isModule(moduleName) {
    try {
        require.resolve(moduleName);
        return true;
    }
    catch (_a) {
        return false;
    }
}
exports.default = {
    window: isWindow,
    document: isDocument,
    inWindow: isWindowProperty,
    serviceWorker: supportServiceWorker,
    NotificationGranted: isNotificationGranted,
    localhost: isWindowLocalhost,
    module: isModule,
};
