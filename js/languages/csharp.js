// js/languages/csharp.js
const languageData = {
  name: "C#",

  definition:
    "C# (pronounced C-Sharp) is a modern, object-oriented programming language developed by Microsoft. It is used for developing desktop applications, web apps, games, and more using the .NET framework.",

  history:
    "C# was developed in 2000 by Microsoft, led by Anders Hejlsberg. It was designed as part of the .NET initiative and has since become one of the most widely used languages for Windows applications.",

  features: [
    "Object-Oriented",
    "Component-oriented",
    "Garbage collection",
    "Type-safe",
    "Interoperable with other .NET languages"
  ],

  basics: {
    intro: "C# is syntactically similar to Java and C++. It is commonly used with Visual Studio and the .NET platform.",
    helloWorld:
      'using System;\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello, World!");\n  }\n}',
    comments: "// Single-line\n/* Multi-line */",
    variables:
      'int age = 25;\nstring name = "John";\ndouble score = 9.5;'
  },

  dataTypes: {
    types:
      "int, double, float, char, string, bool, object, decimal",
    example:
      "bool isReady = true;\nchar initial = 'A';\ndecimal salary = 75000.00m;"
  },

  operators: {
    arithmetic: "+, -, *, /, %",
    comparison: "==, !=, >, <, >=, <=",
    logical: "&&, ||, !",
    example:
      "int a = 10, b = 5;\nConsole.WriteLine(a + b);"
  },

  controlFlow: {
    ifElse:
      'int x = 18;\nif (x >= 18) {\n  Console.WriteLine("Adult");\n} else {\n  Console.WriteLine("Minor");\n}',
    forLoop:
      'for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}',
    whileLoop:
      'int i = 0;\nwhile (i < 3) {\n  Console.WriteLine(i);\n  i++;\n}'
  },

  functions: {
    defFunc:
      'static int Add(int x, int y) {\n  return x + y;\n}',
    callFunc:
      'Console.WriteLine(Add(5, 7));'
  },

  oop: {
    classObj:
      'class Person {\n  public string Name;\n  public void Greet() {\n    Console.WriteLine("Hello " + Name);\n  }\n}',
    inheritance:
      'class Animal {\n  public virtual void Speak() { Console.WriteLine("Sound"); }\n}\n\nclass Dog : Animal {\n  public override void Speak() { Console.WriteLine("Bark"); }\n}'
  },

  fileHandling: {
    readWrite:
      'using System.IO;\nFile.WriteAllText("data.txt", "Hello C#");\nstring content = File.ReadAllText("data.txt");\nConsole.WriteLine(content);'
  },

  errorHandling: {
    tryCatch:
      'try {\n  int x = int.Parse("abc");\n} catch (FormatException e) {\n  Console.WriteLine("Error: " + e.Message);\n}'
  },

  advanced: {
    asyncAwait:
      'async Task<string> FetchData() {\n  HttpClient client = new HttpClient();\n  return await client.GetStringAsync("https://example.com");\n}',
    linq:
      'int[] nums = { 1, 2, 3 };\nvar evens = nums.Where(n => n % 2 == 0);'
  },

  examples: {
    factorial:
      'static int Fact(int n) {\n  if (n <= 1) return 1;\n  return n * Fact(n - 1);\n}',
    palindrome:
      'string str = "level";\nchar[] arr = str.ToCharArray();\nArray.Reverse(arr);\nstring rev = new string(arr);\nif (str == rev) Console.WriteLine("Palindrome");'
  },

  useCases: [
    "Windows desktop applications",
    ".NET web services",
    "Game development with Unity",
    "Enterprise software",
    "Cloud applications (Azure)"
  ],

  references: {
    keywords: [
      "using",
      "class",
      "public",
      "static",
      "void",
      "int",
      "return"
    ],
    builtinClasses: ["Console", "File", "String", "List", "Task"],
    namespaces: [
      "System",
      "System.IO",
      "System.Collections.Generic",
      "System.Threading.Tasks"
    ]
  }
};

