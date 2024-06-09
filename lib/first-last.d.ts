/**
 * @description
 * Return first item of the array
 */
export type First<T> = T extends [infer U, ...infer rest] ? U : never;
/**
 * @description
 * Return last item of the array
 */
export type Last<T> = T extends [...infer U, infer last] ? last : never;
