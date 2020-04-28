# simpul

Library of (mostly) simple functions I happen to use in a lot of projects...

### Not on "Can't Resolve" Errors:

If you receive errors regarding missing modules or modules that can't be resolved (which is common in front-end frameworks like React or Gatsby), you might need to add something like the following to your projects root configs:

```
actions.setWebpackConfig({
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty',
    child_process: 'empty'
  }
})
```

## Table of Contents

1. [capitalize](#capitalize)
2. [changeArrayIndex](#changeArrayIndex)
3. [changeCase](#changeCase)
   1. [camelToSnake](#camelToSnake)
   2. [snakeToCamel](#snakeToCamel)
   3. [camelCase](#camelCase)
   4. [unCamelCase](#unCamelCase)
4. [clone](#clone)
5. [formattedTimestamp](#formattedTimestamp)
6. [getQueryParam](#getQueryParam)
7. [logti](#logti)
8. [objectFlat](#objectFlat)
9. [reduceKeysToObject](#reduceKeysToObject)
10. [sort](#sort)
    1. [byAlphabetKey](#byAlphabetKey)
    2. [byDateKey](#byDateKey)
11. [stringExists](#stringExists)
12. [stringLength](#stringLength)
    1. [char](#char)
    2. [words](#words)

### External modules:

1. [jsontxt](https://github.com/nameer-rizvi/jsontxt)
2. [sanitized](https://github.com/nameer-rizvi/sanitized)

## capitalize

Capitalizes first letter in a string.

```javascript
capitalize("this is a sentence.");

// This is a sentence.
```

## changeArrayIndex

Change the index of an item in an array.

```javascript
changeArrayIndex([1, 2, 3, 4], 1, 3);

// [1, 3, 4, 2]
```

## changeCase

### camelToSnake

Change case of string from camelCase to snake_case.

```javascript
changeCase.camelToSnake("nameOfSomething");

// name_of_something
```

### snakeToCamel

Change case of string from snake_case to camelCase.

```javascript
changeCase.snakeToCamel("name_of_something");

// nameOfSomething
```

### camelCase

Change case of string to camelCase.

```javascript
changeCase.snakeToCamel("this is a string");

// thisIsAString
```

### unCamelCase

Change case of string from camelCase to normal Case.

```javascript
changeCase.unCamelCase("thisIsAString");

// this is a string
```

## clone

Deep clone an array or object.

```javascript
const arr = [1, 2, 3, 4];
const copy = clone(arr);

copy.forEach((num, index) => (copy[index] = num + index));

// arr remains [1, 2, 3, 4]
// copy changes without changing corresponding reference in arr [1, 3, 5, 7]
```

## formattedTimestamp

Return Date object in a readable, numbered format.

Options include: M for month, D for day, Y for year, h for hour, m for minute, and p for AM/PM.

Default format: `M/D/Y h:m p`

```javascript
formattedTimestamp(new Date(), "D-M-Y");

// 23-04-2020
```

## getQueryParam

Get and sanitize a query param/hash from the URL.

```javascript
// browser url: https://website.com/get?param1=poop&param2=pee

getQueryParam("param1");

// poop
```

## logti

Simple logging with timestamps.

Accepts one param. It can be a string or an object that contains a string value.

Sample:

```javascript
aPromiseFunction
  .then((res) => logti("Promise resolved."))
  .catch((err) => logti(err));

// [02/29/2020 10:53 AM] Promise resolved.
// or...
// [02/29/2020 10:53 AM] Something went wrong in function.
```

## objectFlat

Flatten nested objects to base level.

```javascript
objectFlat({ a: { b: { c: "hello" } } });

// { c: "hello" }
```

## reduceKeysToObject

Takes an array of strings and converts them to an object with assigned values.

```javascript
reduceKeysToObject(["a", "b"], (key, index) => `${key}_${index}`);

// { a: "a_0", b: "b_1" }
```

## sort

### byAlphabetKey

Sorts an array of objects by a string-value key by comparing string-values in lower case.

```javascript
sort.byAlphabetKey([{ a: "this", b: "is" }, { a: "boo", b: "you" }], "a");

// [ { a: 'boo', b: 'you' }, { a: 'this', b: 'is' } ]
```

### byDateKey

Sorts an array of objects by a date-value key.

```javascript
sort.byDateKey(
  [{ a: new Date(), b: "is" }, { a: new Date() - 40, b: "you" }],
  "a"
);

// [
//   { a: 1587648103928, b: 'you' },
//   { a: 2020-04-23T13:21:43.968Z, b: 'is' }
// ]
```

## stringExists

Checks if value exists, is a string, and is not an empty string

```javascript
stringExists("   ");

// null

stringExists("   hello");

// "hello"
```

## stringLength

### char

Returns character length of string.

```javascript
stringLength.char("this is a string");

// 17
```

### words

Returns word length of string.

```javascript
stringLength.words("this is a string.");

// 4
```
