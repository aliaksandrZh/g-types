/**
 * @description
 * {a: 1, b: {c: 2}} -> {a: number, 'b.c': number}
 */
export type Flatten<T, P extends string = ""> = {
    [K in keyof T]: T[K] extends object ? Flatten<T[K], `${P}${K & string}.`> : {
        [key in `${P}${K & string}`]: T[K];
    };
}[keyof T];
