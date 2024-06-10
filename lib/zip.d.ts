/**
 * @description
 * [a, b], [c, d] -> [[a, c], [b,d]]
 */
export type Zip<T extends any[], U extends any[]> = T extends [
  infer TF,
  ...infer TR
]
  ? U extends [infer UF, ...infer UR]
    ? [[TF, UF], ...Zip<TR, UR>]
    : []
  : [];
