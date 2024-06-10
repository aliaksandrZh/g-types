export type IsString<T> = T extends string ? true : false;
export type IsNumber<T> = T extends number ? true : false;
export type IsBoolean<T> = T extends boolean ? true : false;
export type IsFunction<T> = T extends (...args: any[]) => any ? true : false;
export type IsObject<T> = T extends object
  ? T extends (...args: any[]) => any
    ? false
    : true
  : false;
