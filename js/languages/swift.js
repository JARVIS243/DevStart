// js/languages/swift.js
const languageData = {
  name: "Swift",

  definition:
    "Swift is a powerful and intuitive programming language created by Apple for developing iOS, macOS, watchOS, and tvOS applications.",

  history:
    "Swift was introduced by Apple in 2014 as a modern replacement for Objective-C. It emphasizes safety, performance, and developer productivity.",

  features: [
    "Modern syntax with type safety",
    "Optionals and error handling",
    "Powerful pattern matching",
    "Protocol-oriented and object-oriented programming",
    "Memory management with ARC"
  ],

  basics: {
    helloWorld:
      'print("Hello, Swift!")',
    variables:
      'var name: String = "John"\nlet age: Int = 25',
    comments:
      '// Single-line comment\n/* Multi-line\n   comment */'
  },

  dataTypes: {
    types:
      'Int, Float, Double, Bool, String, Array, Dictionary, Set, Optional',
    example:
      'let fruits: [String] = ["Apple", "Banana"]\nlet profile: [String: String] = ["name": "John", "city": "NY"]'
  },

  operators: {
    arithmetic: '+, -, *, /, %',
    comparison: '==, !=, >, <, >=, <=',
    logical: '&&, ||, !',
    example:
      'let a = 10\nlet b = 5\nprint(a + b)'
  },

  controlFlow: {
    ifElse:
      'if age >= 18 {\n  print("Adult")\n} else {\n  print("Minor")\n}',
    forLoop:
      'for i in 1...5 {\n  print(i)\n}',
    whileLoop:
      'var i = 0\nwhile i < 3 {\n  print(i)\n  i += 1\n}'
  },

  functions: {
    defFunc:
      'func greet(name: String) -> String {\n  return "Hello, \(name)"\n}',
    callFunc:
      'print(greet(name: "John"))'
  },

  oop: {
    classObj:
      'class Person {\n  var name: String\n  init(name: String) {\n    self.name = name\n  }\n  func greet() {\n    print("Hi \(name)")\n  }\n}',
    inheritance:
      'class Animal {\n  func sound() { print("Generic Sound") }\n}\nclass Dog: Animal {\n  override func sound() { print("Bark") }\n}'
  },

  errorHandling: {
    tryCatch:
      'enum FileError: Error { case notFound }\nfunc readFile() throws {\n  throw FileError.notFound\n}\ndo {\n  try readFile()\n} catch {\n  print("File not found")\n}'
  },

  advanced: {
    optionals:
      'var name: String? = "Swift"\nif let unwrapped = name {\n  print(unwrapped)\n}',
    closures:
      'let square = { (x: Int) -> Int in return x * x }\nprint(square(4))'
  },

  examples: {
    factorial:
      'func factorial(_ n: Int) -> Int {\n  return n <= 1 ? 1 : n * factorial(n - 1)\n}',
    palindrome:
      'let str = "madam"\nlet rev = String(str.reversed())\nif str == rev {\n  print("Palindrome")\n}'
  },

  useCases: [
    "iOS and macOS application development",
    "WatchOS and tvOS apps",
    "Game development with SpriteKit or SceneKit",
    "Command-line tools",
    "System-level applications on Apple platforms"
  ],

  references: {
    keywords: ["var", "let", "func", "class", "struct", "enum", "if", "else", "switch"],
    builtins: ["print", "min", "max", "abs", "map", "filter"],
    imports: ["Foundation", "UIKit", "SwiftUI"]
  }
};
