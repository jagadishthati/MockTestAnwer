Execution context is a fundamental concept in JavaScript that determines how the code is executed and how variables, functions, and scopes are accessed during runtime. It can be thought of as the environment or the "context" in which the code is evaluated.

When JavaScript code is executed, it is run within an execution context. Each execution context consists of two main components: the Variable Environment and the Lexical Environment. The Variable Environment holds the variables and their values, while the Lexical Environment holds information about the scope and identifiers.

Let's break down the components of an execution context:

1. Variable Environment: The Variable Environment is where variables and function declarations are stored. It includes two main components: the Variable Object and the Scope Chain.

   - Variable Object: The Variable Object contains all the variables, function declarations, and function arguments defined within the current context. It provides a reference to all the identifiers in the current scope.

   - Scope Chain: The Scope Chain is a list of Variable Objects that represents the current scope and all its parent scopes. It allows variables and functions to be accessed in nested scopes.

2. Lexical Environment: The Lexical Environment holds information about the current scope and identifiers. It includes two main components: the Environment Record and the Outer Environment Reference.

   - Environment Record: The Environment Record is similar to the Variable Object in the Variable Environment. It stores the identifiers and their bindings within the current scope.

   - Outer Environment Reference: The Outer Environment Reference points to the Lexical Environment of the parent scope. It allows access to variables and functions in the outer scope.

During the execution of JavaScript code, multiple execution contexts can be created, forming an Execution Context Stack or Call Stack. The topmost execution context in the stack is the one currently being executed.

When a function is invoked, a new execution context is created and pushed onto the stack. Once the function completes its execution, its execution context is removed from the stack, and the control returns to the previous execution context.

Here's a simplified diagram illustrating the relationship between execution contexts and their components:

```
Execution Context Stack
---------------------------
|     Execution Context 3    |
------------------------------
|     Execution Context 2    |
------------------------------
|     Execution Context 1    |
------------------------------

Execution Context 1
---------------------------
| Variable Environment      |
| - Variable Object         |
| - Scope Chain              |
|                           |
| Lexical Environment       |
| - Environment Record      |
| - Outer Environment Ref.  |
-----------------------------
```

In the diagram, the execution context stack shows multiple execution contexts, with the topmost context being the currently executing one. Each execution context has its own Variable Environment and Lexical Environment, which hold the necessary information for variable and scope resolution.

The execution context concept is essential for understanding variable scoping, function invocation, and the overall runtime behavior of JavaScript code. It helps manage the state and provide a structured environment for executing JavaScript programs.