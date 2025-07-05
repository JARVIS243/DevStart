// js/languages/cpp.js
const languageData = {
  name: "C++",

  definition:
    "C++ is a high-performance, compiled programming language that extends C by adding object-oriented features. It's widely used for systems programming, game development, and performance-critical applications.",

  history:
    "C++ was developed by Bjarne Stroustrup at Bell Labs in the early 1980s as an extension of the C language to include object-oriented features.",

  features: [
    "Object-Oriented Programming",
    "Low-level memory manipulation",
    "Rich Standard Template Library (STL)",
    "Multiple paradigms supported",
    "Fast and efficient execution"
  ],

  basics: {
    intro: "C++ builds upon the syntax and functionality of C, introducing classes, templates, and more.",
    helloWorld:
      '#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello, World!" << endl;\n  return 0;\n}',
    comments: '// Single-line comment\n/* Multi-line comment */',
    variables:
      'int age = 20;\ndouble pi = 3.1416;\nstring name = "John";'
  },

  dataTypes: {
    types:
      'int, float, double, char, bool, void, string',
    example:
      'int x = 10;\nbool isActive = true;\nstring msg = "C++";'
  },

  operators: {
    arithmetic: '+, -, *, /, %',
    comparison: '==, !=, >, <, >=, <=',
    logical: '&&, ||, !',
    example:
      'int a = 5, b = 2;\ncout << a + b;'
  },

  controlFlow: {
    ifElse:
      'int score = 75;\nif (score >= 50) {\n  cout << "Pass";\n} else {\n  cout << "Fail";\n}',
    forLoop:
      'for (int i = 0; i < 5; i++) {\n  cout << i << endl;\n}',
    whileLoop:
      'int i = 0;\nwhile (i < 3) {\n  cout << i << endl;\n  i++;\n}'
  },

  functions: {
    defFunc:
      'int add(int a, int b) {\n  return a + b;\n}',
    callFunc:
      'cout << add(3, 4);'
  },

  oop: {
    classObj:
      'class Person {\n  public:\n    string name;\n    void greet() { cout << "Hi, " << name; }\n};',
    inheritance:
      'class Animal {\npublic:\n  void speak() { cout << "Animal sound"; }\n};\n\nclass Dog : public Animal {\npublic:\n  void speak() { cout << "Bark"; }\n};'
  },

  fileHandling: {
    readWrite:
      '#include <fstream>\nusing namespace std;\n\nofstream fout("file.txt");\nfout << "Hello C++";\nfout.close();\n\nifstream fin("file.txt");\nstring content;\ngetline(fin, content);\ncout << content;\nfin.close();'
  },

  errorHandling: {
    tryCatch:
      'try {\n  throw runtime_error("Something went wrong");\n} catch (exception &e) {\n  cout << e.what();\n}'
  },

  advanced: {
    templates:
      'template <typename T>\nT add(T a, T b) { return a + b; }',
    stl:
      '#include <vector>\n#include <algorithm>\nvector<int> v = {1, 2, 3};\nsort(v.begin(), v.end());'
  },

  examples: {
    factorial:
      'int fact(int n) {\n  if (n <= 1) return 1;\n  return n * fact(n - 1);\n}',
    palindrome:
      '#include <string>\nstring s = "madam";\nstring r = s;\nreverse(r.begin(), r.end());\nif (s == r) cout << "Palindrome";'
  },

  useCases: [
    "Game development (Unreal Engine)",
    "Operating systems & drivers",
    "High-frequency trading",
    "Simulation & CAD software",
    "Embedded systems"
  ],

  references: {
    keywords: [
      'int', 'float', 'class', 'public', 'private', 'return', 'if', 'for'
    ],
    stdFunctions: ['cout', 'cin', 'getline', 'sort', 'reverse'],
    headers: ['iostream', 'fstream', 'vector', 'string', 'algorithm']
  }
};
