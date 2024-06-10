/**
 * @description
 * Removes a readonly modifier from properties
 */
export type DeepWritable<T> = { -readonly [P in keyof T]: DeepWritable<T[P]> };

/**
 * @description
 * Returns a readonly object
 */
export type DeepReadonly<T> = { readonly [P in keyof T]: DeepWritable<T[P]> };
