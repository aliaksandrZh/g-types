# Generics from practice

`First` - Gets type of the first element of the array

`Last` - Gets type of the last element of the array

`Flatten` - Flats your object

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

`NestedKeys` - Returns all keys of object
`NestedValues` - Returns types of all object properties
