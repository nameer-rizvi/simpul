interface CallbackArgs {
    key: string;
    path: string;
    value: any;
    depth: number;
}
declare function recursively(json: any, callback: (args: CallbackArgs) => any, depth?: number, path?: string[]): any;
export default recursively;
