# Generics from practice

## npm i g-types

`First<T>` - Gets type of the first element of the array

`Last<T>` - Gets type of the last element of the array

`Flatten<T>` - Flats your object

```
Original Object Structure               | Flattened Object Structure
--------------------------------------- | ---------------------------------
{                                       | {
  a: 1,                                 |   'a': number,
  b: {                                  |   'b.c': number
    c: 2                                | }
  }                                     |
}                                       |

```

`NestedKeys<T>` - Returns all keys of object

`NestedValues<T>` - Returns types of all object properties

`Zip<T, U>` - [a, b], [c, d] -> [[a, c], [b,d]]

`DeepWritable<T>` - Removes a readonly modifier from properties

`DeepReadonly<T>` - Returns a readonly object

`FunctionArguments<T>` - Returns type of the function's arguments

`Concat<T, U>` - Return concatenated array

### Guards

- `IsString<T>`
- `IsNumber<T>`
- `IsBoolean<T>`
- `IsFunction<T>`
- `IsObject<T>`
