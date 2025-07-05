// js/languages/python.js
const languageData = {
  name: "Python",

  definition:
    "Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility.",

  history:
    "Python was created by Guido van Rossum and released in 1991. It emphasizes code readability and developer productivity.",

  features: [
    "Easy-to-read syntax",
    "Interpreted and dynamically typed",
    "Supports multiple paradigms",
    "Large standard library",
    "Great for automation, data science, web development"
  ],

  basics: {
    intro: "Python is beginner-friendly and used in many domains including web, AI, and scripting.",
    install: "Download from python.org and run using 'python' or 'python3'.",
    helloWorld: 'print("Hello, World!")',
    comments: '# This is a comment',
    variables: 'name = "John"\nage = 30\npi = 3.14'
  },

  dataTypes: {
    types: 'int, float, str, bool, list, tuple, dict, set',
    example: 'a = 5\nb = "text"\nc = [1, 2, 3]'
  },

  operators: {
    arithmetic: '+, -, *, /, %, **, //',
    comparison: '==, !=, >, <, >=, <=',
    logical: 'and, or, not',
    example: 'a = 10\nb = 5\nprint(a + b)' 
  },

  controlFlow: {
    ifElse: 'x = 10\nif x > 5:\n    print("Greater")\nelse:\n    print("Smaller")',
    forLoop: 'for i in range(3):\n    print(i)',
    whileLoop: 'n = 0\nwhile n < 3:\n    print(n)\n    n += 1'
  },

  functions: {
    defFunc: 'def greet(name):\n    print("Hello", name)',
    lambdaFunc: 'square = lambda x: x*x\nprint(square(4))'
  },

  oop: {
    classObj: 'class Person:\n    def __init__(self, name):\n        self.name = name\n    def greet(self):\n        print("Hi,", self.name)',
    inheritance: 'class Animal:\n    def speak(self):\n        print("Sound")\n\nclass Dog(Animal):\n    def speak(self):\n        print("Bark")'
  },

  modules: {
    importUsage: 'import math\nprint(math.sqrt(16))',
    pipUsage: 'pip install requests\nimport requests'
  },

  fileHandling: {
    readWrite: 'with open("file.txt", "w") as f:\n    f.write("Hello")\n\nwith open("file.txt") as f:\n    print(f.read())'
  },

  errorHandling: {
    tryExcept: 'try:\n    x = int("a")\nexcept ValueError:\n    print("Invalid")'
  },

  advanced: {
    decorators: 'def decor(func):\n    def wrap():\n        print("Before")\n        func()\n        print("After")\n    return wrap\n\n@decor\ndef hello():\n    print("Hello")',
    generators: 'def gen():\n    yield 1\n    yield 2\n\nfor i in gen():\n    print(i)'
  },

  examples: {
    calculator: 'a = int(input("A: "))\nb = int(input("B: "))\nprint("Sum =", a + b)',
    palindrome: 's = input("Enter:")\nif s == s[::-1]:\n    print("Palindrome")'
  },

  useCases: [
    "Data Science with Pandas/Numpy",
    "Web Development with Django/Flask",
    "Machine Learning with Scikit/TensorFlow",
    "Scripting and Automation",
    "APIs and Web Scraping"
  ],

  references: {
    keywords: ['def', 'class', 'import', 'return', 'lambda'],
    builtinFunctions: ['print()', 'len()', 'type()', 'input()'],
    standardLibs: ['math', 'os', 'sys', 'datetime']
  }
};
