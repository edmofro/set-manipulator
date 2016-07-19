setOps.js
=========
Set operations in `setOps.js` take two arrays and return the result of the operation as an array. Supported operations are `union`, `intersection`, `difference`, `complement`, and `equals`. `difference` is the _symmetric difference_ and `complement` is the _relative complement_. The set operations are fast, even for large arrays.

## Usage

```javascript
var so = setOps,
a = [1, 1, 2, 3, 3], // [1, 2, 3]
b = [3, 4, 4, 5, 5]; // [3, 4, 5]

// Join two sets together. A ∪ B
so.union(a, b); // => [1, 2, 3, 4, 5]

// The intersection of two sets. A ∩ B
so.intersection(a, b); // => [3]

// The symmetric difference of two sets. A Δ B
so.difference(a, b); // => [1, 2, 4, 5]

// The relative complement, or a minus b. A\B
so.complement(a, b); // => [1]

// Set equality. A = B
so.equals(a, b); // => false
so.equals(a, [1, 2, 3]); // => true
```

## Using Objects

Arrays of objects can be used in set operations as long as they have some type of unique identifier. If objects have a `toString` method which returns the unique identifier, they can be used as is. If not, a custom uid method can be specified. The methods `pushUid` and `popUid` work together to set and remove a context for returning an object's identifier.

```javascript
var so = setOps,
a = [{id:1}, {id:2}],
b = [{id:2}, {id:3}],

// Push a method to retrieve object ids onto the uid stack.
uidMethod = so.pushUid(function() {
  return this.id;
});

// Peform set operations.

so.union(a, b); // => [{id:1}, {id:2}, {id:3}]

so.intersection(a, b); // => [{id:2}]

so.difference(a, b); // => [{id:1}, {id:3}]

so.complement(a, b); // => [{id:1}]

so.equals(a, b); // => false
so.equals(a, [{id:1}, {id:2}]); // => true

// Now that we're done, restore the previous uid method
// (by default an identity method).

uidMethod = so.popUid();
```
