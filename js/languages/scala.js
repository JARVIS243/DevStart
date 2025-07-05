// js/languages/scala.js
const languageData = {
  name: "Scala",

  definition:
    "Scala is a statically-typed, object-functional programming language that runs on the Java Virtual Machine (JVM). It blends functional and object-oriented programming in a concise, elegant, and type-safe manner.",

  history:
    "Scala was created by Martin Odersky and released in 2004. It was designed to address shortcomings in Java and to enable a more concise and expressive syntax.",

  features: [
    "Supports both OOP and functional programming",
    "Interoperable with Java",
    "Immutable data structures",
    "Type inference",
    "Pattern matching"
  ],

  basics: {
    helloWorld:
      'object Main extends App {\n  println("Hello, Scala!")\n}',
    variables:
      'val name: String = "John"\nvar age: Int = 25',
    comments:
      '// Single-line comment\n/* Multi-line\n   comment */'
  },

  dataTypes: {
    types:
      'Int, Double, Boolean, String, List, Set, Map, Tuple',
    example:
      'val list = List(1, 2, 3)\nval map = Map("a" -> 1, "b" -> 2)'
  },

  operators: {
    arithmetic: '+, -, *, /, %',
    comparison: '==, !=, >, <, >=, <=',
    logical: '&&, ||, !',
    example:
      'val x = 10\nval y = 5\nprintln(x + y)'
  },

  controlFlow: {
    ifElse:
      'val age = 18\nif (age >= 18) println("Adult") else println("Minor")',
    forLoop:
      'for (i <- 1 to 5) println(i)',
    whileLoop:
      'var i = 0\nwhile (i < 3) {\n  println(i)\n  i += 1\n}'
  },

  functions: {
    defFunc:
      'def add(a: Int, b: Int): Int = {\n  a + b\n}',
    callFunc:
      'println(add(4, 6))'
  },

  oop: {
    classObj:
      'class Person(name: String) {\n  def greet(): Unit = println(s"Hello, $name")\n}',
    inheritance:
      'class Animal {\n  def sound(): Unit = println("Sound")\n}\nclass Dog extends Animal {\n  override def sound(): Unit = println("Bark")\n}'
  },

  functionalProgramming: {
    mapFilter:
      'val numbers = List(1, 2, 3, 4)\nval doubled = numbers.map(_ * 2)\nval evens = numbers.filter(_ % 2 == 0)',
    lambda:
      'val square = (x: Int) => x * x\nprintln(square(5))'
  },

  examples: {
    factorial:
      'def fact(n: Int): Int = if (n <= 1) 1 else n * fact(n - 1)',
    palindrome:
      'val str = "madam"\nval rev = str.reverse\nif (str == rev) println("Palindrome")'
  },

  useCases: [
    "Big data with Apache Spark",
    "Backend systems",
    "Concurrent programming",
    "DSL (Domain Specific Languages)",
    "Research and education"
  ],

  references: {
    keywords: ["val", "var", "def", "class", "object", "extends", "if", "else", "match"],
    builtins: ["println", "map", "filter", "reduce", "List", "Set", "Map"],
    libraries: ["Scala Standard Library", "Akka", "Play Framework", "Cats"]
  }
};
