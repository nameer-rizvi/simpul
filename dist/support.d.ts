declare function isWindowProperty(propertyName: string): boolean;
declare function isModule(moduleName: string): boolean;
declare const _default: {
    window: boolean;
    document: boolean;
    inWindow: typeof isWindowProperty;
    serviceWorker: boolean;
    NotificationGranted: boolean;
    localhost: boolean;
    module: typeof isModule;
};
export default _default;
