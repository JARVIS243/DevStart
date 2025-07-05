// js/languages/rust.js
const languageData = {
  name: "Rust",

  definition:
    "Rust is a multi-paradigm, statically typed systems programming language focused on safety, especially safe concurrency and memory management.",

  history:
    "Rust was started by Graydon Hoare in 2006 and officially sponsored by Mozilla. It reached 1.0 in 2015 and has been praised for memory safety without garbage collection.",

  features: [
    "Memory safety",
    "Zero-cost abstractions",
    "Ownership and borrowing",
    "Pattern matching",
    "Concurrency without data races"
  ],

  basics: {
    helloWorld:
      'fn main() {\n    println!("Hello, Rust!");\n}',
    variables:
      'let x = 5;\nlet mut y = 10;',
    comments:
      '// This is a comment'
  },

  dataTypes: {
    types:
      'i32, f64, bool, char, String, tuple, array, vector',
    example:
      'let nums = [1, 2, 3];\nlet person = ("John", 25);\nlet v = vec![4, 5, 6];'
  },

  operators: {
    arithmetic: '+, -, *, /, %',
    comparison: '==, !=, >, <, >=, <=',
    logical: '&&, ||, !',
    example:
      'let a = 3 + 2;\nlet is_equal = a == 5;'
  },

  controlFlow: {
    ifElse:
      'let age = 18;\nif age >= 18 {\n    println!("Adult");\n} else {\n    println!("Minor");\n}',
    forLoop:
      'for i in 0..5 {\n    println!("{}", i);\n}',
    whileLoop:
      'let mut i = 0;\nwhile i < 3 {\n    println!("{}", i);\n    i += 1;\n}'
  },

  functions: {
    defFunc:
      'fn add(a: i32, b: i32) -> i32 {\n    a + b\n}',
    callFunc:
      'let sum = add(2, 3);\nprintln!("{}", sum);'
  },

  ownership: {
    example:
      'let s1 = String::from("hello");\nlet s2 = s1; // s1 moved to s2\n// println!("{}", s1); // Error: value borrowed'
  },

  examples: {
    factorial:
      'fn factorial(n: u32) -> u32 {\n    if n == 0 { 1 } else { n * factorial(n - 1) }\n}',
    palindrome:
      'fn is_palindrome(s: &str) -> bool {\n    s.chars().eq(s.chars().rev())\n}'
  },

  useCases: [
    "Systems programming",
    "WebAssembly",
    "Game development",
    "Command-line tools",
    "Embedded systems"
  ],

  references: {
    keywords: ["let", "fn", "mut", "if", "else", "match", "loop", "for", "while"],
    builtins: ["println!", "String", "vec!", "format!", "Some", "None", "Result"],
    crates: ["serde", "tokio", "actix", "rand", "regex"]
  }
};
