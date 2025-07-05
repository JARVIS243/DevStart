// js/languages/javascript.js
const languageData = {
  name: "JavaScript",

  definition:
    "JavaScript is a high-level, interpreted scripting language primarily used to create interactive effects within web browsers.",

  history:
    "JavaScript was created in 1995 by Brendan Eich while working at Netscape. Initially called Mocha, it later became the standard scripting language for the web.",

  features: [
    "Runs in the browser",
    "Event-driven and asynchronous",
    "Dynamically typed",
    "Prototype-based object orientation",
    "Large ecosystem of libraries and frameworks"
  ],

  basics: {
    intro: "JavaScript adds behavior and interactivity to web pages.",
    helloWorld: 'console.log("Hello, World!");',
    comments: '// This is a comment',
    variables: 'let name = "John";\nconst pi = 3.14;',
    dataTypes: 'Number, String, Boolean, Object, Array, Null, Undefined'
  },

  operators: {
    arithmetic: '+, -, *, /, %, **',
    comparison: '==, ===, !=, !==, >, <, >=, <=',
    logical: '&&, ||, !',
    example: 'let a = 5, b = 10;\nconsole.log(a + b);'
  },

  controlFlow: {
    ifElse: 'if (x > 0) {\n  console.log("Positive");\n} else {\n  console.log("Non-positive");\n}',
    forLoop: 'for (let i = 0; i < 5; i++) {\n  console.log(i);\n}',
    whileLoop: 'let i = 0;\nwhile (i < 3) {\n  console.log(i);\n  i++;\n}'
  },

  functions: {
    defFunc: 'function greet(name) {\n  return "Hello " + name;\n}',
    arrowFunc: 'const greet = name => "Hello " + name;'
  },

  oop: {
    classSyntax: 'class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    console.log("Hi " + this.name);\n  }\n}',
    inheritance: 'class Animal {\n  speak() { console.log("Sound"); }\n}\n\nclass Dog extends Animal {\n  speak() { console.log("Bark"); }\n}'
  },

  dom: {
    selectElement: 'const btn = document.getElementById("myBtn");',
    eventHandling: 'btn.addEventListener("click", () => alert("Clicked!"));'
  },

  modules: {
    exportImport: 'export function sum(a, b) { return a + b; }\n\n// another file\nimport { sum } from "./math.js";'
  },

  errorHandling: {
    tryCatch: 'try {\n  nonExistentFunction();\n} catch (e) {\n  console.error("Error occurred", e);\n}'
  },

  advanced: {
    promises: 'fetch("api/data.json")\n  .then(res => res.json())\n  .then(data => console.log(data));',
    asyncAwait: 'async function load() {\n  const res = await fetch("api/data.json");\n  const data = await res.json();\n  console.log(data);\n}'
  },

  examples: {
    calculator: 'let a = parseInt(prompt("A:"));\nlet b = parseInt(prompt("B:"));\nalert("Sum = " + (a + b));',
    palindrome: 'let str = prompt("Enter text");\nif (str === str.split("").reverse().join("")) {\n  alert("Palindrome");\n}'
  },

  useCases: [
    "Web Interactivity",
    "Single Page Applications",
    "Mobile Apps using React Native",
    "Backend with Node.js",
    "Game Development and Real-time Apps"
  ],

  references: {
    keywords: ['var', 'let', 'const', 'function', 'return', 'class'],
    builtinFunctions: ['alert()', 'prompt()', 'console.log()', 'setTimeout()'],
    webApis: ['fetch()', 'addEventListener()', 'localStorage']
  }
};