/**
 * @description
 * Returns type of the function's arguments
 */
export type FunctionArguments<T extends (...args: any) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;
