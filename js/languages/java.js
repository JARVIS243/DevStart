// js/languages/java.js
const languageData = {
  name: "Java",

  definition:
    "Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is widely used for building enterprise-scale applications.",

  history:
    "Java was developed by James Gosling at Sun Microsystems and released in 1995. It became popular for its portability across platforms using the JVM (Java Virtual Machine).",

  features: [
    "Platform independent (Write Once, Run Anywhere)",
    "Object-Oriented",
    "Strongly typed",
    "Automatic memory management (Garbage Collection)",
    "Large standard library"
  ],

  basics: {
    intro: "Java uses a syntax similar to C/C++ and emphasizes OOP principles.",
    helloWorld:
      'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
    comments: '// Single-line comment\n/* Multi-line comment */',
    variables:
      'int age = 25;\nString name = "John";\ndouble salary = 50000.50;'
  },

  dataTypes: {
    types:
      'Primitive types: byte, short, int, long, float, double, boolean, char\nNon-primitive: String, Arrays, Classes, Interfaces',
    example:
      'int x = 10;\nboolean flag = true;\nString msg = "Java";'
  },

  operators: {
    arithmetic: '+, -, *, /, %',
    comparison: '==, !=, >, <, >=, <=',
    logical: '&&, ||, !',
    example:
      'int a = 5, b = 10;\nSystem.out.println(a + b);'
  },

  controlFlow: {
    ifElse:
      'int age = 18;\nif (age >= 18) {\n  System.out.println("Adult");\n} else {\n  System.out.println("Minor");\n}',
    forLoop:
      'for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}',
    whileLoop:
      'int i = 0;\nwhile (i < 3) {\n  System.out.println(i);\n  i++;\n}'
  },

  functions: {
    defFunc:
      'public static int add(int a, int b) {\n  return a + b;\n}',
    callFunc:
      'int sum = add(3, 5);\nSystem.out.println("Sum: " + sum);'
  },

  oop: {
    classObj:
      'class Person {\n  String name;\n  Person(String name) {\n    this.name = name;\n  }\n  void greet() {\n    System.out.println("Hi, " + name);\n  }\n}',
    inheritance:
      'class Animal {\n  void speak() { System.out.println("Sound"); }\n}\n\nclass Dog extends Animal {\n  void speak() { System.out.println("Bark"); }\n}'
  },

  fileHandling: {
    readWrite:
      'import java.io.*;\n\ntry {\n  FileWriter writer = new FileWriter("file.txt");\n  writer.write("Hello Java");\n  writer.close();\n\n  BufferedReader reader = new BufferedReader(new FileReader("file.txt"));\n  String line = reader.readLine();\n  System.out.println(line);\n  reader.close();\n} catch (IOException e) {\n  e.printStackTrace();\n}'
  },

  errorHandling: {
    tryCatch:
      'try {\n  int result = 10 / 0;\n} catch (ArithmeticException e) {\n  System.out.println("Error: " + e.getMessage());\n}'
  },

  advanced: {
    threads:
      'class MyThread extends Thread {\n  public void run() {\n    System.out.println("Running thread");\n  }\n}\n\nMyThread t = new MyThread();\nt.start();',
    generics:
      'public class Box<T> {\n  T value;\n  void set(T value) { this.value = value; }\n  T get() { return value; }\n}'
  },

  examples: {
    factorial:
      'public static int fact(int n) {\n  if (n <= 1) return 1;\n  return n * fact(n - 1);\n}',
    palindrome:
      'String str = "madam";\nString rev = new StringBuilder(str).reverse().toString();\nif (str.equals(rev)) {\n  System.out.println("Palindrome");\n}'
  },

  useCases: [
    "Enterprise web applications (Spring, Hibernate)",
    "Android mobile development",
    "Desktop apps with JavaFX/Swing",
    "Big Data processing (Hadoop)",
    "Scientific computing and simulations"
  ],

  references: {
    keywords: [
      'public', 'static', 'void', 'class', 'extends', 'implements', 'interface'
    ],
    builtinClasses: ['System', 'Math', 'Scanner', 'File', 'ArrayList'],
    commonMethods: ['println()', 'length()', 'charAt()', 'add()', 'get()']
  }
};