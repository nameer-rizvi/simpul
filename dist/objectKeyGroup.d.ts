interface GroupedObject {
    keys: string[];
    keysWithoutId: string[];
    extracted: Record<string, any>;
    extractedWithoutId: Record<string, any>;
}
declare function objectKeyGroup(object?: Record<string, any>, keyStartsWith?: string, keyEndsWith?: string): GroupedObject;
export default objectKeyGroup;
