---
"title:": Revising JS shaky concepts
desc: Just me flexing and working my JS concepts to get better at it (Day 2)
---
#### Removing an element from an array

Method 1: 
Can use the delete key word

```
delete arr[index];
```
It works, but not so well.

It basically only removes the element by key, and leaves an empty space in the array.

**NOT RECOMMENDED**

Method 2: 
using the ".splice()" method.

```
arr.splice(start[, deleteNumber, insert])
```

for example:

```
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// I want "Eagles" removed  

birds.splice(2, 1);
```