// DevStart/js/learn-data.js

const learnData = {
  python: {
    name: "Python",
    definition: "Python is a high-level, interpreted programming language known for its clear syntax and readability. It is used in web development, data science, AI, automation, and more.",
    syntax: `def greet(name):
    print("Hello, " + name)`,
    example: `def greet(name):
    print("Hello, " + name)

greet("John")`
  },

  javascript: {
    name: "JavaScript",
    definition: "JavaScript is the scripting language of the Web, used to create dynamic and interactive user interfaces in browsers.",
    syntax: `function greet(name) {
  console.log("Hello, " + name);
}`,
    example: `function greet(name) {
  console.log("Hello, " + name);
}

greet("John");`
  },

  java: {
    name: "Java",
    definition: "Java is a versatile, object-oriented programming language commonly used for building cross-platform applications.",
    syntax: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`,
    example: `public class Main {
  public static void main(String[] args) {
    greet("John");
  }

  static void greet(String name) {
    System.out.println("Hello, " + name);
  }
}`
  },

  typescript: {
    name: "TypeScript",
    definition: "TypeScript is a superset of JavaScript that adds optional static typing to make code easier to read and debug.",
    syntax: `function greet(name: string): void {
  console.log("Hello, " + name);
}`,
    example: `let name: string = "John";
greet(name);`
  },

  csharp: {
    name: "C#",
    definition: "C# is a modern, object-oriented language developed by Microsoft for building Windows, web, and mobile applications.",
    syntax: `using System;

class Program {
  static void Main() {
    Console.WriteLine("Hello World");
  }
}`,
    example: `using System;

class Program {
  static void Greet(string name) {
    Console.WriteLine("Hello, " + name);
  }

  static void Main() {
    Greet("John");
  }
}`
  },

  c: {
    name: "C",
    definition: "C is a foundational low-level programming language used in systems programming, embedded devices, and performance-critical code.",
    syntax: `#include <stdio.h>

int main() {
  printf("Hello World\n");
  return 0;
}`,
    example: `#include <stdio.h>

void greet(const char* name) {
  printf("Hello, %s\n", name);
}

int main() {
  greet("John");
  return 0;
}`
  },

  cpp: {
    name: "C++",
    definition: "C++ is an extension of C that adds object-oriented features. It is widely used for game development, performance apps, and large systems.",
    syntax: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello World" << endl;
  return 0;
}`,
    example: `#include <iostream>
using namespace std;

void greet(string name) {
  cout << "Hello, " + name << endl;
}

int main() {
  greet("John");
  return 0;
}`
  },

  sql: {
    name: "SQL",
    definition: "SQL (Structured Query Language) is used to communicate with and manage databases.",
    syntax: `SELECT * FROM users WHERE age > 18;`,
    example: `CREATE TABLE users (
  id INT,
  name TEXT
);

INSERT INTO users VALUES (1, 'John');

SELECT * FROM users;`
  },

  go: {
    name: "Go",
    definition: "Go is a statically typed language developed by Google, known for its speed, simplicity, and concurrency support.",
    syntax: `package main
import "fmt"

func main() {
  fmt.Println("Hello World")
}`,
    example: `package main
import "fmt"

func greet(name string) {
  fmt.Println("Hello,", name)
}

func main() {
  greet("John")
}`
  },

  rust: {
    name: "Rust",
    definition: "Rust is a systems programming language focused on safety and speed, often used in performance-critical applications.",
    syntax: `fn main() {
  println!("Hello, World!");
}`,
    example: `fn greet(name: &str) {
  println!("Hello, {}", name);
}

fn main() {
  greet("John");
}`
  },

  php: {
    name: "PHP",
    definition: "PHP is a server-side scripting language mainly used for web development and backend programming.",
    syntax: `<?php
echo "Hello World";
?>`,
    example: `<?php
function greet($name) {
  echo "Hello, " . $name;
}

greet("John");
?>`
  },

  kotlin: {
    name: "Kotlin",
    definition: "Kotlin is a modern, concise language developed by JetBrains. It runs on the JVM and is used for Android and backend apps.",
    syntax: `fun main() {
  println("Hello World")
}`,
    example: `fun greet(name: String) {
  println("Hello, $name")
}

fun main() {
  greet("John")
}`
  },

  swift: {
    name: "Swift",
    definition: "Swift is a fast and safe programming language developed by Apple for iOS and macOS development.",
    syntax: `print("Hello World")`,
    example: `func greet(name: String) {
  print("Hello, \(name)")
}

greet(name: "John")`
  },

  dart: {
    name: "Dart",
    definition: "Dart is a client-optimized language for UI, developed by Google and used with Flutter to build mobile/web apps.",
    syntax: `void main() {
  print("Hello World");
}`,
    example: `void greet(String name) {
  print("Hello, $name");
}

void main() {
  greet("John");
}`
  },

  r: {
    name: "R",
    definition: "R is a language and environment for statistical computing and graphics, popular among data scientists.",
    syntax: `print("Hello World")`,
    example: `greet <- function(name) {
  print(paste("Hello,", name))
}

greet("John")`
  },

  bash: {
    name: "Bash",
    definition: "Bash is a command-line shell and scripting language used on Unix/Linux systems for task automation.",
    syntax: `#!/bin/bash
echo "Hello World"`,
    example: `#!/bin/bash
greet() {
  echo "Hello, $1"
}

greet "John"`
  },

  matlab: {
    name: "MATLAB",
    definition: "MATLAB is used for numerical computing, simulations, and engineering applications with matrices and plots.",
    syntax: `disp('Hello World');`,
    example: `function greet(name)
  disp(['Hello, ', name])
end

greet('John');`
  },

  scala: {
    name: "Scala",
    definition: "Scala is a hybrid functional and object-oriented language that runs on the JVM and is used in data and backend applications.",
    syntax: `object Main {
  def main(args: Array[String]) = {
    println("Hello World")
  }
}`,
    example: `object Main {
  def greet(name: String) = {
    println("Hello, " + name)
  }

  def main(args: Array[String]) = {
    greet("John")
  }
}`
  },

  ruby: {
    name: "Ruby",
    definition: "Ruby is a dynamic, open-source language known for its simplicity and productivity. It is the language behind Rails.",
    syntax: `puts "Hello World"`,
    example: `def greet(name)
  puts "Hello, #{name}"
end

greet("John")`
  },

  perl: {
    name: "Perl",
    definition: "Perl is a powerful scripting language ideal for text processing, data manipulation, and system administration tasks.",
    syntax: `print "Hello World\n";`,
    example: `sub greet {
  my $name = shift;
  print "Hello, $name\n";
}

greet("John");`
  },

  htmlcss: {
    name: "HTML & CSS",
    definition: "HTML structures content on the web while CSS styles it. Together they create the foundation of web pages.",
    syntax: `<html>
  <head>
    <style>p { color: blue; }</style>
  </head>
  <body>
    <p>Hello World</p>
  </body>
</html>`,
    example: `<html>
  <head>
    <style>h1 { color: green; }</style>
  </head>
  <body>
    <h1>Hello, John!</h1>
  </body>
</html>`
  }
};
