interface GroupedObject {
    keys: string[];
    keysWithoutId: string[];
    extracted: Record<string, unknown>;
    extractedWithoutId: Record<string, unknown>;
}
declare function objectKeyGroup(input?: Record<string, unknown>, keyStartsWith?: string, keyEndsWith?: string): GroupedObject;
export default objectKeyGroup;
