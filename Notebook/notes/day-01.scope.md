---
id: mqvg9lcksxj972qqeany14t
title: Scope
desc: Understanding Scope, Variable Scope and Lexical Environments
updated: 1781639741553
created: 1781603089033
---
**Scope** simply equals current context in which values and expressions are "visible" or can be referenced.

A value (can be a variable or an expression) can't be used outside of the context in which it exists. 

-> Scope is organized in "layers" when it comes to heirarchy.

Child scope
    ↑
Parent scope
    ↑
Global scope

children can access what belongs to the parent, but parent scope can't access what belongs to the children. 


Types of Scope:
- Global: The default scope for all code running in script mode

- Module: Scope for code running in module mode

- Function: Scope for code in a function 

- Block: Scope within a block of code. Note: Block only scope let and const but not Var declarations.

Example is:

{
    var x = 1;
}

console.log(x) ==> 1

{
    let x = 1;
    let y = 2;
}

console.log(x) ==> Ref. error, since x isn't defined outside of the blockscope

console.log(y) ==> Ref. error, since y isn't defined outside of the blockscope

**Block scopes are useful for isolating pieces of code that does their own tasks.

Example:

{
  // show message
  let message = "Hello";
  alert(message);
}

{
  // show another message
  let message = "Goodbye";
  alert(message);
}

**Nested Functions**

Simply functions created inside an already created function 

**Lexical Environment** -> A specification object, it doesn't actually exist in real time, we just use it to explain things.

Blocks of code/ functions/ scripts all have an hidden object that's made of two parts.

This hidden object is what's being referred to as the "Lexical Environment" and the parts are:

> Environmental Record: This part holds the variables (local) and thier properties

> A reference to the outer environment.

Wonder why you can use a function even when you declare it later in the code? 

It's simply function declarations are instantly fully __initialized__

