// js/languages/typescript.js
const languageData = {
  name: "TypeScript",

  definition:
    "TypeScript is a statically typed superset of JavaScript developed by Microsoft. It adds optional static typing, interfaces, and advanced tooling to JavaScript.",

  history:
    "TypeScript was introduced by Microsoft in 2012, designed for large-scale JavaScript applications with enhanced maintainability and tooling.",

  features: [
    "Optional static typing",
    "Compile-time error checking",
    "Class-based object-oriented programming",
    "Interfaces and Generics",
    "Supports modern JavaScript features"
  ],

  basics: {
    helloWorld:
      'let message: string = "Hello, TypeScript!";\nconsole.log(message);',
    variables:
      'let age: number = 30;\nconst name: string = "John";\nlet isActive: boolean = true;',
    comments:
      '// Single-line comment\n/* Multi-line\n   comment */'
  },

  dataTypes: {
    types:
      'number, string, boolean, null, undefined, any, void, never, array, tuple, enum, object',
    example:
      'let ids: number[] = [1, 2, 3];\nlet person: [number, string] = [1, "Alice"];\nenum Direction { Up, Down, Left, Right }'
  },

  operators: {
    arithmetic: '+, -, *, /, %',
    comparison: '==, ===, !=, !==, >, <, >=, <=',
    logical: '&&, ||, !',
    example:
      'let x = 10, y = 5;\nconsole.log(x + y);'
  },

  controlFlow: {
    ifElse:
      'if (age >= 18) {\n  console.log("Adult");\n} else {\n  console.log("Minor");\n}',
    forLoop:
      'for (let i = 0; i < 5; i++) {\n  console.log(i);\n}',
    whileLoop:
      'let i = 0;\nwhile (i < 3) {\n  console.log(i);\n  i++;\n}'
  },

  functions: {
    defFunc:
      'function greet(name: string): string {\n  return `Hello, ${name}`;\n}',
    callFunc:
      'console.log(greet("John"));'
  },

  oop: {
    classObj:
      'class Person {\n  name: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n  greet() {\n    console.log(`Hi ${this.name}`);\n  }\n}',
    inheritance:
      'class Animal {\n  speak() {\n    console.log("Animal sound");\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    console.log("Bark");\n  }\n}'
  },

  interfacesGenerics: {
    interface:
      'interface User {\n  id: number;\n  name: string;\n}\nconst user: User = { id: 1, name: "John" };',
    generics:
      'function identity<T>(arg: T): T {\n  return arg;\n}\nconsole.log(identity<string>("hello"));'
  },

  advanced: {
    types:
      'type Employee = { id: number; dept: string };\nconst emp: Employee = { id: 1, dept: "HR" };',
    unionTypes:
      'function printId(id: number | string) {\n  console.log("ID:", id);\n}'
  },

  examples: {
    factorial:
      'function fact(n: number): number {\n  if (n <= 1) return 1;\n  return n * fact(n - 1);\n}',
    palindrome:
      'let str = "madam";\nlet rev = str.split("").reverse().join("");\nif (str === rev) console.log("Palindrome");'
  },

  useCases: [
    "Large-scale web applications",
    "Angular development",
    "Frontend frameworks",
    "API development",
    "Cross-platform apps (Ionic, React Native)"
  ],

  references: {
    keywords: ['let', 'const', 'class', 'interface', 'extends', 'implements', 'type', 'enum'],
    builtins: ['console', 'Math', 'Date', 'Array', 'Promise'],
    types: ['string', 'number', 'boolean', 'any', 'unknown', 'void', 'never']
  }
};
