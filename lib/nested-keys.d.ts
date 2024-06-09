/**
 * Returns all keys of object
 */
export type NestedKeys<T> = T extends object ? {
    [K in keyof T]: K | NestedKeys<T[K]>;
}[keyof T] : never;
