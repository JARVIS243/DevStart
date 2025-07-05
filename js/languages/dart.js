// js/languages/dart.js
const languageData = {
  name: "Dart",

  definition:
    "Dart is a client-optimized language for fast apps on any platform, developed by Google. It is used for building web, server, and especially mobile applications with Flutter.",

  history:
    "Dart was introduced by Google in 2011. It gained widespread popularity with the introduction of Flutter in 2017 for cross-platform mobile development.",

  features: [
    "Compiled and interpreted",
    "Null safety",
    "Supports OOP with classes and mixins",
    "Asynchronous programming with async/await",
    "Cross-platform UI with Flutter"
  ],

  basics: {
    helloWorld:
      'void main() {\n  print("Hello, Dart!");\n}',
    variables:
      'var name = "John";\nint age = 30;\nfinal pi = 3.14;',
    comments:
      '// Single-line comment\n/* Multi-line\n   comment */'
  },

  dataTypes: {
    types:
      'int, double, String, bool, List, Map, Set, Runes, Symbol',
    example:
      'List<String> fruits = ["apple", "banana"];\nMap<String, int> scores = {"Math": 95, "Science": 90};'
  },

  operators: {
    arithmetic: '+, -, *, /, %',
    comparison: '==, !=, >, <, >=, <=',
    logical: '&&, ||, !',
    example:
      'int a = 10;\nint b = 5;\nprint(a + b);'
  },

  controlFlow: {
    ifElse:
      'int age = 18;\nif (age >= 18) {\n  print("Adult");\n} else {\n  print("Minor");\n}',
    forLoop:
      'for (int i = 0; i < 5; i++) {\n  print(i);\n}',
    whileLoop:
      'int i = 0;\nwhile (i < 3) {\n  print(i);\n  i++;\n}'
  },

  functions: {
    defFunc:
      'int add(int a, int b) {\n  return a + b;\n}',
    callFunc:
      'print(add(3, 7));'
  },

  oop: {
    classObj:
      'class Person {\n  String name;\n  Person(this.name);\n  void greet() {\n    print("Hello \$name");\n  }\n}',
    inheritance:
      'class Animal {\n  void speak() => print("Sound");\n}\n\nclass Dog extends Animal {\n  @override\n  void speak() => print("Bark");\n}'
  },

  asyncProgramming: {
    futureExample:
      'Future<String> fetchData() async {\n  await Future.delayed(Duration(seconds: 2));\n  return "Data loaded";\n}\n\nvoid main() async {\n  print(await fetchData());\n}'
  },

  advanced: {
    mixins:
      'mixin Walker {\n  void walk() => print("Walking");\n}\n\nclass Person with Walker {}',
    extensions:
      'extension NumberExtension on int {\n  int square() => this * this;\n}\nprint(4.square());'
  },

  examples: {
    factorial:
      'int fact(int n) => n <= 1 ? 1 : n * fact(n - 1);',
    palindrome:
      'String str = "madam";\nString rev = str.split("").reversed.join();\nif (str == rev) print("Palindrome");'
  },

  useCases: [
    "Flutter mobile app development",
    "Web apps with DartPad and AngularDart",
    "Server-side scripting",
    "Command-line tools",
    "Desktop apps with Flutter"
  ],

  references: {
    keywords: ["var", "final", "const", "class", "extends", "implements", "async", "await"],
    builtins: ["print", "main", "Future", "List", "Map", "Set"],
    packages: ["dart:core", "dart:async", "dart:io", "flutter"]
  }
};
