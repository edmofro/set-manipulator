set-manipulator
=========
ES6 set manipulation operations based on https://gist.github.com/jabney/d9d5c13ad7f871ddf03f

Set operations take two arrays and return the result of the operation as an array. Supported operations are `union`, `intersection`, `difference`, `complement`, and `equals`. `difference` is the _symmetric difference_ and `complement` is the _relative complement_. The set operations are fast, even for large arrays.

## Installation

```npm install set-manipulator```

## Usage

```javascript
import {
  union,
  intersection,
  difference,
  complement,
  equals,
} from 'set-manipulator';
const a = [1, 1, 2, 3, 3]; // [1, 2, 3]
const b = [3, 4, 4, 5, 5]; // [3, 4, 5]

// Join two sets together. A ∪ B
union(a, b); // => [1, 2, 3, 4, 5]

// The intersection of two sets. A ∩ B
intersection(a, b); // => [3]

// The symmetric difference of two sets. A Δ B
difference(a, b); // => [1, 2, 4, 5]

// The relative complement, or a minus b. A\B
complement(a, b); // => [1, 2]

// Set equality. A = B
equals(a, b); // => false
equals(a, [1, 2, 3]); // => true
```

## Using Objects

Arrays of objects can be used in set operations as long as they have some type of unique identifier. A custom identity extractor method can be specified as a third argument to any of the set manipulation functions.

```javascript
import { union } from 'set-manipulator';
const a = [{ id: a, number: 1 }, { id: b, number: 2 }];
const b = [{ id: c, number: 5}];

// Join two sets together. A ∪ B
union(a, b, (object) => object.id); // => [{ id: a, number: 1 }, { id: b, number: 2 }, { id: c, number: 5 }];
```
