/**
 * @description
 * Returns types of all object properties
 */
export type NestedValues<T extends object> = {
  [K in keyof T]: T[K] extends object ? T[K] | NestedValues<T[K]> : T[K];
}[keyof T];
