// js/languages/kotlin.js
const languageData = {
  name: "Kotlin",

  definition:
    "Kotlin is a modern, statically typed programming language developed by JetBrains. It is concise, expressive, and interoperable with Java, primarily used for Android development and backend services.",

  history:
    "Kotlin was introduced by JetBrains in 2011 and officially supported by Google for Android development in 2017.",

  features: [
    "Concise syntax",
    "Null safety",
    "Interoperable with Java",
    "Coroutines for asynchronous programming",
    "Smart casts and type inference"
  ],

  basics: {
    helloWorld:
      'fun main() {\n  println("Hello, Kotlin!")\n}',
    variables:
      'val name: String = "John"\nvar age: Int = 25\nval pi = 3.14',
    comments:
      '// Single-line\n/* Multi-line\n   comment */'
  },

  dataTypes: {
    types:
      'String, Int, Float, Double, Boolean, Char, Array, List, Set, Map',
    example:
      'val message: String = "Hi"\nval numbers: List<Int> = listOf(1, 2, 3)'
  },

  operators: {
    arithmetic: '+, -, *, /, %',
    comparison: '==, !=, >, <, >=, <=',
    logical: '&&, ||, !',
    example:
      'val a = 10\nval b = 5\nprintln(a + b)'
  },

  controlFlow: {
    ifElse:
      'val age = 20\nif (age >= 18) {\n  println("Adult")\n} else {\n  println("Minor")\n}',
    forLoop:
      'for (i in 1..5) {\n  println(i)\n}',
    whileLoop:
      'var i = 0\nwhile (i < 3) {\n  println(i)\n  i++\n}'
  },

  functions: {
    defFunc:
      'fun add(a: Int, b: Int): Int {\n  return a + b\n}',
    callFunc:
      'println(add(4, 5))'
  },

  oop: {
    classObj:
      'class Person(val name: String) {\n  fun greet() {\n    println("Hello, $name")\n  }\n}',
    inheritance:
      'open class Animal {\n  open fun sound() = println("Sound")\n}\n\nclass Dog : Animal() {\n  override fun sound() = println("Bark")\n}'
  },

  fileHandling: {
    readWrite:
      'import java.io.File\n\nFile("data.txt").writeText("Hello Kotlin")\nval text = File("data.txt").readText()\nprintln(text)'
  },

  errorHandling: {
    tryCatch:
      'try {\n  val num = "abc".toInt()\n} catch (e: NumberFormatException) {\n  println("Error: ${e.message}")\n}'
  },

  advanced: {
    coroutines:
      'import kotlinx.coroutines.*\n\nfun main() = runBlocking {\n  launch {\n    delay(1000L)\n    println("World!")\n  }\n  println("Hello")\n}',
    extensions:
      'fun String.greet() = println("Hello, $this")\n"Kotlin".greet()'
  },

  examples: {
    factorial:
      'fun fact(n: Int): Int {\n  return if (n <= 1) 1 else n * fact(n - 1)\n}',
    palindrome:
      'val str = "madam"\nval rev = str.reversed()\nif (str == rev) println("Palindrome")'
  },

  useCases: [
    "Android development",
    "Backend development with Ktor or Spring",
    "Cross-platform apps (Kotlin Multiplatform)",
    "Desktop applications",
    "Scripting and CLI tools"
  ],

  references: {
    keywords: ['val', 'var', 'fun', 'class', 'object', 'when', 'if', 'else'],
    builtins: ['println()', 'readLine()', 'toInt()', 'listOf()', 'mapOf()'],
    stdlib: ['kotlin.io', 'kotlin.collections', 'kotlin.coroutines']
  }
};
